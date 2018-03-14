import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import UserCard from 'components/Card/UserCard.jsx';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import { charts } from 'variables/chartsVariables.jsx';
import ChartistGraph from 'react-chartist';

import Datetime from 'react-datetime';
// react component that creates a dropdown menu for selection
import Select from 'react-select';

import avatar from "assets/img/default-avatar.png";

import {postRequestOptions, getRequestOptions, checkStatus} from '../../helpers/fetch';
import { apiUrl } from "../../helpers/api"

var selectOptions = [
    { value: 'teacher', label: 'teacher' },
    { value: 'student', label: 'student' },
    { value: 'mentor', label: 'mentor' },
    { value: 'admin', label: 'admin' } ]  

var selectGenderOptions = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' } ]  

var selectRaceOptions = [
    { value: 'Black or African American', label: 'Black or African American' },
    { value: 'Native Hawaiian or Other Pacific Islander', label: 'Native Hawaiian or Other Pacific Islander' },
    { value: 'Asian', label: 'Asian' },
    { value: 'American Indian or Alaska Native', label: 'American Indian or Alaska Native' },
    { value: 'White', label: 'White' } ]  
        
class UserPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userType: selectOptions[1],
            gender: null,
            race: null,
            // Register
            email: "",
            password: "",
            cfpassword: "",
            emailError: null,
            passwordError: null,
            cfpasswordError: null,            
            person: [] 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    
    componentDidMount() {
        const request = getRequestOptions()
        fetch(apiUrl+'persons/3',request)
        .then(checkStatus)
        .then(response => response.json())
        .then(person => {
              this.setState({
                person
            })
            console.log("person: ", this.state.person)
        })
        .catch(function (error) {
            console.log('Request failed', error);
        })
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value
        });
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(event.target.value) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }):this.setState({ emailError: null });
    }

    handleSubmit(event) {

        event.preventDefault();
        
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }):this.setState({ emailError: null });
                
        const formData = new FormData(event.target)
        const request = postRequestOptions(formData)
    
        this.state.emailError === null ?
        fetch(apiUrl+'persons', request)        
        .then(checkStatus)
        .then(response => response.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        }) : null;
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="Upcoming Assignments"
                                category="Due this week"
                                tableFullWidth
                                content={
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Assignment</th>
                                                <th className="text-right">Class</th>
                                                <th className="text-right">Due Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Modeling rectangular shapes</td>
                                                <td>Career Prep</td>
                                                <td className="text-right">10/15</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>Emotional Intelligence: Intro</td>
                                                <td>SEL</td>
                                                <td className="text-right">10/12</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>Math exercise 1</td>
                                                <td>Math</td>
                                                <td className="text-right">10/12</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td>Writing exercise 1</td>
                                                <td>ELA</td>
                                                <td className="text-right">10/13</td>
                                                
                                            </tr>
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                        {
                            charts.map((prop,key) => {
                                return (
                                    <Col md={6} key={key}>
                                        <Card
                                            title={prop.chart.title}
                                            category={prop.chart.category}
                                            content={
                                                <ChartistGraph
                                                    data={prop.chart.chart.data}
                                                    type={prop.chart.chart.type}
                                                    options={prop.chart.chart.options}
                                                    responsiveOptions={prop.chart.chart.responsiveOptions}
                                                />
                                            }
                                            legend={
                                                prop.chart.legend
                                            }
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form onSubmit={this.handleSubmit}>
                                        <FormInputs
                                            ncols = {["col-md-6" , "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 name: "firstName",
                                                 label : "First name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "First name"
                                                },
                                                {
                                                 name: "lastName",
                                                 label : "Last name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Last name"
                                                }
                                            ]}
                                        />
                                        <FormGroup>
                                            <ControlLabel>Email adress: <span className="star">*</span></ControlLabel>
                                            <FormControl type="text" name="email" onChange={ (event) => this.handleEmailChange(event) }/>
                                            {this.state.emailError}
                                        </FormGroup>
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Address",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Home Adress",
                                                    defaultValue : "1601 N Peoria St, Unit 109"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-4","col-md-4","col-md-4"]}
                                            proprieties = {[
                                                {
                                                    label : "City",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "City",
                                                    defaultValue : "Chicago"
                                                },
                                                {
                                                    label : "Postal Code",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "ZIP Code"
                                                },
                                                {
                                                    label : "Phone Number",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "phone"
                                                }
                                            ]}
                                        />
                                        <Col md={4}>
                                            <h6 className="title">Date of Birth</h6>
                                            <FormGroup>
                                                <Datetime
                                                    name = "dateOfBirth"
                                                    timeFormat={false}
                                                    inputProps={{placeholder:"Date Picker Here"}}
                                                    defaultValue={new Date()}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <h6 className="title">User Type</h6>
                                            <Select
                                                    name="userType"
                                                    value={this.state.userType}
                                                    options={selectOptions}
                                                    onChange={(value) => this.setState({ userType: value})}
                                                />
                                        </Col>
                                        <Col md={4}>
                                            <h6 className="title">Gender</h6>
                                            <Select
                                                    name="gender"
                                                    value={this.state.gender}
                                                    options={selectGenderOptions}
                                                    onChange={(value) => this.setState({ gender: value})}
                                                />
                                        </Col>
                                        <Col md={4}>
                                            <h6 className="title">Ethnicity</h6>
                                            <Select
                                                    name="race"
                                                    value={this.state.race}
                                                    options={selectRaceOptions}
                                                    onChange={(value) => this.setState({ race: value})}
                                                />
                                        </Col>
                                        <ControlLabel className="col-sm-2">
                                                Hispanic or Latino:
                                                </ControlLabel>
                                                <Col sm={1}>
                                                    <Checkbox
                                                        name="isHispanic"
                                                        number="1"
                                                        label="yes"
                                                    />
                                                </Col>
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>My Goals</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="I want to grow up to be a Software Developer!"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default UserPage;
