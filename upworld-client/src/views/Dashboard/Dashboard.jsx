import React, { Component } from "react";
//import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from 'components/Card/Card.jsx';

/*
import StatsCard from 'components/Card/StatsCard.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../../variables/Variables.jsx";
*/
import {getRequestOptions, checkStatus} from '../../helpers/fetch';
import { apiUrl } from "../../helpers/api"

class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        persons: [] 
    }
    this.createLegend = this.createLegend.bind(this)
  }

  componentDidMount() {
    const request = getRequestOptions()
    fetch(apiUrl+'persons?fields=lastName,firstName,userType&sort=lastName', request)        
    .then(checkStatus)
    .then(response => response.json())
    .then(persons => 
      {
        this.setState({
          persons
        })
      console.log("persons: ", this.state.persons)
    })
    .catch(function (error) {
        console.log('Request failed', error);
    })
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {

    let persons = this.state.persons

    return <div className="content">
         <Grid fluid>
          <Row>
            <Col md={12}>
              <Card title="Striped Table with Hover" category="Here is a subtitle for this table" ctTableFullWidth ctTableResponsive content={<Table striped hover>
                    <thead>
                      {
                        (persons.length) ?
                          <tr key={0}>
                            {Object.keys(persons[0]).map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                         : null
                      }
                    </thead>
                    <tbody>
                      {
                        (persons.length) ?
                          persons.map((person, key) => {
                          return <tr key={key}>
                            {Object.keys(person).map((prop, key) => {
                              return <td key={key}>{person[prop]}</td>;
                            })}
                          </tr>;
                        })
                         : <tr><td>loading...</td></tr>
                      }
                    </tbody>
                  </Table>} />
            </Col>
          </Row>
        </Grid>
      </div>;
  }
}

export default Dashboard;
