import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table,
    OverlayTrigger,
    Tooltip, FormGroup
} from 'react-bootstrap';
// react component that creates a switch button that changes from on to off mode
import Switch from 'react-bootstrap-switch';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';
// react component that creates a dropdown menu for selecting a date
import Datetime from 'react-datetime';
// react component that creates a switch button that changes from on to off mode

import img1 from 'assets/img/blog-1.jpg';
import img2 from 'assets/img/blog-2.jpg';
import img3 from 'assets/img/blog-3.jpg';
import img4 from 'assets/img/blog-4.jpg';
import img5 from 'assets/img/blog-5.jpg';

class Attendance extends Component{
    render(){
        const view = (
            <Tooltip id="view">View Profile</Tooltip>
        );
        const edit = (
            <Tooltip id="edit">Edit Profile</Tooltip>
        );
        const remove = (
            <Tooltip id="remove">Remove</Tooltip>
        );
        const viewPost = (
            <Tooltip id="view">View Post</Tooltip>
        );
        const editPost = (
            <Tooltip id="edit">Edit Post</Tooltip>
        );
        const removePost = (
            <Tooltip id="remove">Remove Post</Tooltip>
        );
        const actions = (
            <td className="td-actions text-right">
                <OverlayTrigger placement="top" overlay={view}>
                    <Button simple bsStyle="info" bsSize="xs">
                        <i className="fa fa-user"></i>
                    </Button>
                </OverlayTrigger>
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
            </td>
        );
        const actionsPost = (
            <td className="td-actions">
                <OverlayTrigger placement="left" overlay={viewPost}>
                    <Button simple icon bsStyle="info">
                        <i className="fa fa-image"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="left" overlay={editPost}>
                    <Button simple icon bsStyle="success">
                        <i className="fa fa-edit"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="left" overlay={removePost}>
                    <Button simple icon bsStyle="danger">
                        <i className="fa fa-times"></i>
                    </Button>
                </OverlayTrigger>
            </td>
        );
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Daily Attendance"
                                tableFullWidth
                                content={
	                                <div>
		                                <FormGroup>
			                                <Datetime
				                                timeFormat={false}
				                                inputProps={{placeholder:"Date Picker Here"}}
				                                defaultValue={new Date()}
			                                />
		                                </FormGroup>
		                                <Table striped responsive>
			                                <thead>
			                                <tr>
				                                <th className="text-center">#</th>
				                                <th>Student Name</th>
				                                <th className="text-right">Present</th>
			                                </tr>
			                                </thead>
			                                <tbody>
			                                <tr>
				                                <td className="text-center">1</td>
				                                <td>Andrew Mike</td>
				                                <td className="text-right">
					                                <Switch
						                                onText=""
						                                offText=""
						                                defaultValue={false}
					                                />
				                                </td>
			                                </tr>
			                                <tr>
				                                <td className="text-center">2</td>
				                                <td>John Doe</td>
				                                <td className="text-right">
					                                <Switch
						                                onText=""
						                                offText=""
						                                defaultValue={false}
					                                />
				                                </td>
			                                </tr>
			                                <tr>
				                                <td className="text-center">3</td>
				                                <td>Alex Mike</td>
				                                <td className="text-right">
					                                <Switch
						                                onText=""
						                                offText=""
					                                />
				                                </td>
			                                </tr>
			                                <tr>
				                                <td className="text-center">4</td>
				                                <td>Mike Monday</td>
				                                <td className="text-right">
					                                <Switch
						                                onText=""
						                                offText=""
					                                />
				                                </td>
			                                </tr>
			                                </tbody>
		                                </Table>
		                                <Button wd bsStyle="default" flex-end>
			                                Submit
			                                <span className="btn-label btn-label-right">
                                                    <i className="fa fa-arrow-right"></i>
                                                </span>
		                                </Button>
	                                </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Attendance;
