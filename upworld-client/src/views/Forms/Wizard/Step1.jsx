import React from 'react';
import{
    Row, Col,
    FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';


class Step1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            emailError: null
        }
    }
    isValidated(){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }):this.setState({ emailError: null });
        return re.test(this.state.email);
    }
    render(){
        return (
            <div className="wizard-step">
                <h5 className="text-center">Please tell us more about yourself.</h5>
                <Row>
                    <Col md={5} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl type="text" name="first_name" placeholder="ex: Mike"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl type="text" name="last_name" placeholder="ex: Andrew"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Email <span className="text-danger">*</span></ControlLabel>
                            <FormControl type="email" name="email" placeholder="ex: info@upworldinc.org" onChange={ (event) => this.setState({ email: event.target.value }) }/>
                            {this.state.emailError}
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step1;
