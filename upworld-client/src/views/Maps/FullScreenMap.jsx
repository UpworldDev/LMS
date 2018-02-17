import React, { Component } from 'react';
// react components used to create a google map
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class FullScreenMap extends Component{
    render() {
        return (
            <div className="map">
                <Map
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    google={this.props.google}
                    initialCenter={{
                      lat: 41.888378,
                      lng: -87.636513
                    }}
                    zoom={13}
                    clickableIcons={false}
                >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                    />
                </Map>
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAnBfW_veNjNJCMU7uiAzuJkUEsjHT5Yd0"
})(FullScreenMap);
