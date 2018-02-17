import React, { Component } from 'react';
import {
    ButtonGroup,
    Pagination,
    Grid, Row, Col
} from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton.jsx';

class Buttons extends Component{
    render(){
        return (
            <div className="main-content buttons-with-margin">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <div className="card">
                                <Row>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Colors</h4>
                                        </div>
                                        <div className="content">
                                            <Button bsStyle="default" fill wd>Default</Button>
                                            <Button bsStyle="primary" fill wd>Primary</Button>
                                            <Button bsStyle="info" fill wd>Info</Button>
                                            <Button bsStyle="success" fill wd>Success</Button>
                                            <Button bsStyle="warning" fill wd>Warning</Button>
                                            <Button bsStyle="danger" fill wd>Danger</Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Styles</h4>
                                        </div>
                                        <div className="content">
                                            <Button wd>Default</Button>
                                            <Button fill wd>Fill</Button>
                                            <Button fill round wd>Fill + Round</Button>
                                            <Button round wd>Round</Button>
                                            <Button simple wd>Simple</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Buttons with Label</h4>
                                        </div>
                                        <div className="content">
                                            <Button bsStyle="success" wd>
                                                <span className="btn-label">
                                                    <i className="fa fa-check"></i>
                                                </span>
                                                Success
                                            </Button>
                                            <Button wd bsStyle="danger">
                                                <span className="btn-label">
                                                    <i className="fa fa-times"></i>
                                                </span>
                                                Danger
                                            </Button>
                                            <Button wd bsStyle="info">
                                                <span className="btn-label">
                                                    <i className="fa fa-exclamation"></i>
                                                </span>
                                                Info
                                            </Button>
                                            <Button wd bsStyle="warning">
                                                <span className="btn-label">
                                                    <i className="fa fa-warning"></i>
                                                </span>
                                                Warning
                                            </Button>
                                            <Button wd bsStyle="default">
                                                <span className="btn-label">
                                                    <i className="fa fa-arrow-left"></i>
                                                </span>
                                                Left
                                            </Button>
                                            <Button wd bsStyle="default">
                                                Right
                                                <span className="btn-label btn-label-right">
                                                    <i className="fa fa-arrow-right"></i>
                                                </span>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Sizes</h4>
                                        </div>
                                        <div className="content">
                                            <Button bsSize="lg" fill>Large</Button>
                                            <Button fill>Default</Button>
                                            <Button bsSize="sm" fill>Small</Button>
                                            <Button bsSize="xs" fill>X-Small</Button>
                                            <br />
                                            <Button bsSize="lg" round fill>Large</Button>
                                            <Button round fill>Default</Button>
                                            <Button bsSize="sm" round fill>Small</Button>
                                            <Button bsSize="xs" round fill>X-Small</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Button Group</h4>
                                        </div>
                                        <div className="content">
                                            <ButtonGroup>
                                                <Button bsStyle="default">Left</Button>
                                                <Button bsStyle="default">Middle</Button>
                                                <Button bsStyle="default">Right</Button>
                                            </ButtonGroup>
                                            <br /><br />
                                            <ButtonGroup>
                                                <Button bsStyle="default">1</Button>
                                                <Button bsStyle="default">2</Button>
                                                <Button bsStyle="default">3</Button>
                                                <Button bsStyle="default">4</Button>
                                            </ButtonGroup>
                                            <ButtonGroup>
                                                <Button bsStyle="default">5</Button>
                                                <Button bsStyle="default">6</Button>
                                                <Button bsStyle="default">7</Button>
                                            </ButtonGroup>
                                            <ButtonGroup>
                                                <Button bsStyle="default">8</Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="header">
                                            <h4 className="title">Pagination</h4>
                                        </div>
                                        <div className="content">
                                            <Pagination
                                                first
                                                last
                                                items={5}
                                                activePage={3}
                                            />
                                            <Pagination
                                                className="pagination-no-border"
                                                first
                                                last
                                                items={5}
                                                activePage={3}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="header">
                                    <h4 className="title">Social buttons</h4>
                                </div>
                                <div className="content">
                                    <Row>
                                        <Col md={3} className="social-buttons-demo">
                                            <h4 className="title"><small> Filled </small></h4>
                                            <Button fill twitter>
                                                <i className="fa fa-twitter"></i> Tweet
                                            </Button>
                                            <br />
                                            <Button fill facebook>
                                                <i className="fa fa-facebook-square"></i> Share
                                            </Button>
                                            <br />
                                            <Button fill google>
                                                <i className="fa fa-google-plus-square"></i> Share on Google+
                                            </Button>
                                            <br />
                                            <Button fill linkedin>
                                                <i className="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </Button>
                                            <br />
                                            <Button fill pinterest>
                                                <i className="fa fa-pinterest"></i> Pint it
                                            </Button>
                                            <br />
                                            <Button fill youtube>
                                                <i className="fa fa-youtube-play"></i> View on Youtube
                                            </Button>
                                            <br />
                                            <Button fill tumblr>
                                                <i className="fa fa-tumblr-square"></i> Repost
                                            </Button>
                                            <br />
                                            <Button fill github>
                                                <i className="fa fa-github"></i> Connect with Github
                                            </Button>
                                            <br />
                                            <Button fill behance>
                                                <i className="fa fa-behance-square"></i> Follow us
                                            </Button>
                                            <br />
                                            <Button fill dribbble>
                                                <i className="fa fa-dribbble"></i> Find us on Dribbble
                                            </Button>
                                            <br />
                                            <Button fill reddit>
                                                <i className="fa fa-reddit"></i> Repost
                                            </Button>
                                            <br />
                                            <Button fill stumbleupon>
                                                <i className="fa fa-stumbleupon"></i> View on StumbleUpon
                                            </Button>
                                            <br />
                                        </Col>
                                        <Col md={1} className="social-buttons-demo">
                                            <h4 className="title"><small>Light</small></h4>
                                            <Button round twitter>
                                                <i className="fa fa-twitter"></i>
                                            </Button>
                                            <br />
                                            <Button round facebook>
                                                <i className="fa fa-facebook"> </i>
                                            </Button>
                                            <br />
                                            <Button round google>
                                                <i className="fa fa-google-plus"> </i>
                                            </Button>
                                            <br />
                                            <Button round linkedin>
                                                <i className="fa fa-linkedin"></i>
                                            </Button>
                                            <br />
                                            <Button round pinterest>
                                                <i className="fa fa-pinterest"></i>
                                            </Button>
                                            <br />
                                            <Button round youtube>
                                                <i className="fa fa-youtube"> </i>
                                            </Button>
                                            <br />
                                            <Button round tumblr>
                                                <i className="fa fa-tumblr"> </i>
                                            </Button>
                                            <br />
                                            <Button round github>
                                                <i className="fa fa-github"></i>
                                            </Button>
                                            <br />
                                            <Button round behance>
                                                <i className="fa fa-behance"></i>
                                            </Button>
                                            <br />
                                            <Button round dribbble>
                                                <i className="fa fa-dribbble"></i>
                                            </Button>
                                            <br />
                                            <Button round reddit>
                                                <i className="fa fa-reddit"></i>
                                            </Button>
                                            <br />
                                            <Button round stumbleupon>
                                                <i className="fa fa-stumbleupon"></i>
                                            </Button>
                                            <br />
                                        </Col>
                                        <Col md={1} className="social-buttons-demo">
                                            <h4 className="title"><small>Simple</small></h4>
                                            <Button simple twitter>
                                                <i className="fa fa-twitter"></i>
                                            </Button>
                                            <br />
                                            <Button simple facebook>
                                                <i className="fa fa-facebook-square"> </i>
                                            </Button>
                                            <br />
                                            <Button simple google>
                                                <i className="fa fa-google-plus-square"> </i>
                                            </Button>
                                            <br />
                                            <Button simple linkedin>
                                                <i className="fa fa-linkedin-square"></i>
                                            </Button>
                                            <br />
                                            <Button simple pinterest>
                                                <i className="fa fa-pinterest"></i>
                                            </Button>
                                            <br />
                                            <Button simple youtube>
                                                <i className="fa fa-youtube"> </i>
                                            </Button>
                                            <br />
                                            <Button simple tumblr>
                                                <i className="fa fa-tumblr-square"> </i>
                                            </Button>
                                            <br />
                                            <Button simple github>
                                                <i className="fa fa-github"></i>
                                            </Button>
                                            <br />
                                            <Button simple behance>
                                                <i className="fa fa-behance"></i>
                                            </Button>
                                            <br />
                                            <Button simple dribbble>
                                                <i className="fa fa-dribbble"></i>
                                            </Button>
                                            <br />
                                            <Button simple reddit>
                                                <i className="fa fa-reddit"></i>
                                            </Button>
                                            <br />
                                            <Button simple stumbleupon>
                                                <i className="fa fa-stumbleupon"></i>
                                            </Button>
                                            <br />
                                        </Col>
                                        <Col md={3} className="social-buttons-demo">
                                            <h4 className="title"><small>With Text</small></h4>
                                            <Button simple twitter>
                                                <i className="fa fa-twitter"></i> Tweet
                                            </Button><br />
                                            <Button simple facebook>
                                                <i className="fa fa-facebook-square"></i> Share
                                            </Button><br />
                                            <Button simple google>
                                                <i className="fa fa-google-plus-square"></i> Share on Google+
                                            </Button><br />
                                            <Button simple linkedin>
                                                <i className="fa fa-linkedin-square"></i> Connect with Linkedin
                                            </Button><br />
                                            <Button simple pinterest>
                                                <i className="fa fa-pinterest"></i> Pint it
                                            </Button><br />
                                            <Button simple youtube>
                                                <i className="fa fa-youtube-play"></i> View on Youtube
                                            </Button><br />
                                            <Button simple tumblr>
                                                <i className="fa fa-tumblr-square"></i> Repost
                                            </Button><br />
                                            <Button simple github>
                                                <i className="fa fa-github"></i> Connect with Github
                                            </Button><br />
                                            <Button simple behance>
                                                <i className="fa fa-behance-square"></i> Follow us
                                            </Button><br />
                                            <Button simple dribbble>
                                                <i className="fa fa-dribbble"></i> Find us on Dribbble
                                            </Button><br />
                                            <Button simple reddit>
                                                <i className="fa fa-reddit"></i> Repost
                                            </Button><br />
                                            <Button simple stumbleupon>
                                                <i className="fa fa-stumbleupon"></i> View on StumbleUpon
                                            </Button><br />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Buttons;
