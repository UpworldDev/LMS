import React, { Component } from 'react';
import {
    Grid, Row, Col
} from 'react-bootstrap';
// react component used to create a calendar with events on it
import BigCalendar from 'react-big-calendar';
// dependency plugin for react-big-calendar
import moment from 'moment';
// react component used to create alerts
import SweetAlert from 'react-bootstrap-sweetalert';

import Card from 'components/Card/Card.jsx';

import { events } from 'variables/Variables.jsx';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: events,
            alert: null
        };
        this.hideAlert = this.hideAlert.bind(this);
    }
    selectedEvent(event){
        alert(event.title);
    }
    addNewEventAlert(slotInfo){
        this.setState({
            alert: (
                <SweetAlert
                    input
                    showCancel
                    style={{display: "block",marginTop: "-100px"}}
                    title="Input something"
                    onConfirm={(e) => this.addNewEvent(e,slotInfo)}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                    cancelBtnBsStyle="danger"
                />
            )
        });
    }
    addNewEvent(e,slotInfo){
        console.log(e,slotInfo);
        var newEvents = this.state.events;
        newEvents.push({
            'title': e,
            'start':slotInfo.start,
            'end':slotInfo.end
        })
        this.setState({
            alert: null,
            events: newEvents
        })
    }
    hideAlert(){
        this.setState({
            alert: null
        });
    }
    render(){
        return (
            <div className="main-content">
                {this.state.alert}
                <Grid fluid>
                    <Row>
                        <Col md={10} mdOffset={1}>
                                <Card
                                    calendar
                                    content={
                                        <BigCalendar
                                            selectable
                                            events={this.state.events}
                                            defaultView='month'
                                            scrollToTime={new Date(1970, 1, 1, 6)}
                                            defaultDate={new Date()}
                                            onSelectEvent={event => this.selectedEvent(event)}
                                            onSelectSlot={(slotInfo) => this.addNewEventAlert(slotInfo)}
                                        />
                                    }
                                />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Calendar;
