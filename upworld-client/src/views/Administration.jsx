import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, ControlLabel, Table, OverlayTrigger, Tooltip
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import { apiUrl } from "../helpers/api";
import Datetime from 'react-datetime';
import {postRequestOptions, postRequestOptionsRaw, getRequestOptions, checkStatus} from '../helpers/fetch';

class Administration extends Component{
    constructor(props) {
	    super(props);
	    this.vForm = this.refs.vForm;
	    this.state = {
		    // Register
		    email: "",
		    password: "",
		    cfpassword: "",
		    emailError: null,
		    passwordError: null,
		    cfpasswordError: null,
		    /// Login
		    emailLogin: "",
		    emailErrorLogin: null,
		    passwordLogin: "",
		    passwordErrorLogin: null,
		    // Type
		    type_text: "",
		    type_textError: null,
		    type_email: "",
		    type_emailError: null,
		    type_number: "",
		    type_numberError: null,
		    type_url: "",
		    type_urlError: null,
		    type_source: "",
		    type_sourceError: null,
		    type_destination: "",
		    type_destinationError: null,
		    form: {},
		    adminEntities: []
	    }
    }


	componentDidMount() {
		const request = getRequestOptions()
		fetch(apiUrl+this.state.apiRoute, request)
			.then(checkStatus)
			.then(response => response.json())
			.then(adminEntities =>
			{
				this.setState({
					adminEntities
				})
			})
			.catch(function (error) {
				console.log('Request failed', error);
			})
	}

	updateFormStateProp(propName, propVal) {
    	this.state.form[propName] = propVal;
	}

    updateFormState(event){
    	if (event.target.value) {
		    this.state.form[event.target.name] = event.target.value;
	    }

        // var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // re.test(event.target.value) === false ? this.setState({ emailErrorLogin: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }):this.setState({ emailErrorLogin: null });
    }
    submitForm(){
	    const request = postRequestOptionsRaw(this.state.form);

	    fetch(apiUrl+this.state.apiRoute, request)
		    .then(checkStatus)
		    .then(response => response.json())
		    .then(function (data) {
			    console.log('Request succeeded with JSON response', data);
		    })
		    .catch(function (error) {
			    console.log('Request failed', error);
		    });

    }
    render(){
	    const edit = (
		    <Tooltip id="edit">Edit</Tooltip>
	    );
	    const remove = (
		    <Tooltip id="remove">Remove</Tooltip>
	    );
	    const actions = (
		    <td className="td-actions text-right">
			    <OverlayTrigger placement="top" overlay={edit}>
				    <Button simple bsStyle="success" bsSize="xs">
					    <i className="fa fa-edit"></i>
				    </Button>
			    </OverlayTrigger>
			    <OverlayTrigger placement="top" overlay={remove}>
				    <Button simple bsStyle="danger" bsSize="xs">
					    <i className="fa fa-times"></i>
				    </Button>
			    </OverlayTrigger>
		    </td>);
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
	                        <form>
		                        <Card
			                        textCenter
			                        title={'Create '+this.state.entityName}
			                        content={
				                        <div>
					                        {
						                        this.state.tableDisplayProps.map(tableDisplayProp => {
							                        return <FormGroup>
								                        <ControlLabel>
									                        {this.state.entityName} {tableDisplayProp.propName}
									                        <span className="star">*</span>
								                        </ControlLabel>
								                        {(() => {
									                        switch (tableDisplayProp.inputType) {
										                        case 'string':
											                        return <FormControl
												                        type="text"
												                        onChange={ (event) => this.updateFormState(event) }
											                            name={tableDisplayProp.propName}/>
										                        case 'date':
										                        	let selectedDate = '';
											                        return <Datetime
												                        timeFormat={false}
												                        inputProps={{placeholder:"Click To Select Date"}}
												                        onChange={ (event) => event._d && this.updateFormStateProp(tableDisplayProp.propName, event._d.toDateString())}
												                        value={selectedDate}
											                        />;
									                        }
								                        })()}
							                        </FormGroup>;
						                        })
					                        }
				                        </div>
			                        }
			                        legend={
				                        <Button bsStyle="info" fill wd onClick={this.submitForm.bind(this)}>
					                        Create
				                        </Button>
			                        }
		                        />
	                        </form>
                        </Col>
	                    <Col md={12}>
		                    <Card
			                    textCenter
			                    title={this.state.entityName+' List'}
			                    tableFullWidth
			                    content={
				                    <Table responsive>
					                    <thead>
					                    <tr>
						                    {
						                    	this.state.tableDisplayProps.map(tableDisplayProp => {
							                        return <th>{tableDisplayProp.propName}</th>;
						                        })
						                    }
						                    <th className="text-right">Actions</th>
					                    </tr>
					                    </thead>
					                    <tbody>
					                    {
						                    this.state.adminEntities.map(adminEntity => {
							                    return <tr>
								                    {
								                    	this.state.tableDisplayProps.map(tableDisplayProp => {
								                        	return <td>{adminEntity[tableDisplayProp.propName]}</td>
								                        })
								                    }
								                    {/*<td>{adminEntity.name}</td>*/}
								                    {actions}
							                    </tr>;
						                    })
					                    }
					                    </tbody>
				                    </Table>
			                    }
		                    />
	                    </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Administration;
