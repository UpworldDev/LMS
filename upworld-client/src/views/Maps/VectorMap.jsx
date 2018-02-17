import React, { Component } from 'react';
// react components used to create a SVG / Vector map
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import {
    Grid, Row, Col
} from 'react-bootstrap';
// function that returns a color based on an interval of numbers
import { scaleLinear } from "d3-scale";

import Card from 'components/Card/Card.jsx';

const colorScale = scaleLinear()
    .domain([0, 1, 50, 100])
    .range(["#E5E5E5", "#B2B2B2", "#565656", "#000000"]);

class VectorMaps extends Component{
    render(){
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <h3 className="text-center">
                                World Map
                                <br />
                                    <small>
                                        Looks great on any resolution. Made by our friends from <a href="https://github.com/zcreativelabs/react-simple-maps" target="_blank" rel="noopener noreferrer">zcreativelabs</a>.
                                    </small>
                            </h3>
                            <Card
                                content={
                                    <ComposableMap style={{ width: "100%" }}>
                                        <ZoomableGroup>
                                            <Geographies geographyUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json">
                                            {(geographies, projection) => geographies.map(geography => {
                                                var style;
                                                switch (geography.id) {
                                                    case "BRA":
                                                        style={default: { fill: colorScale(4.43) }}
                                                        break;
                                                    case "USA":
                                                        style={default: { fill: colorScale(53.23) }}
                                                        break;
                                                    case "AUS":
                                                        style={default: { fill: colorScale(10.35) }}
                                                        break;
                                                    case "DEU":
                                                        style={default: { fill: colorScale(20.43) }}
                                                        break;
                                                    case "GBR":
                                                        style={default: { fill: colorScale(7.87) }}
                                                        break;
                                                    case "ROU":
                                                        style={default: { fill: colorScale(5.94) }}
                                                        break;
                                                    default:
                                                        style={default: { fill: colorScale(0) }}
                                                        break;
                                                }
                                                return (
                                                    <Geography
                                                        key={ geography.id }
                                                        geography={ geography }
                                                        projection={ projection }
                                                        onClick={ this.handleClick }
                                                        style={style}
                                                    />
                                                )
                                            })}
                                        </Geographies>
                                    </ZoomableGroup>
                                </ComposableMap>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default VectorMaps;
