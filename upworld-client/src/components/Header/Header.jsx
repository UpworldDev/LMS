import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import styled from 'styled-components';

import HeaderLinks from './HeaderLinks.jsx';

import dashRoutes from '../../routes/dash.jsx';

const StyledNavbar = styled(Navbar)`
    background: ghostwhite !important;
`

class Header extends Component{
    constructor(props){
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    mobileSidebarToggle(e){
        if(this.state.sidebarExists === false){
            this.setState({
                sidebarExists : true
            });

        }
        e.preventDefault();
        document.documentElement.classList.toggle('nav-open');
        var node = document.createElement('div');
        node.id = 'bodyClick';
        node.onclick = function(){
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle('nav-open');
        };
        document.body.appendChild(node);
    }
    getBrand(){
        var name;
        dashRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.history.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.history.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.history.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    render(){
        console.log(`Header Props: `, this.props);
        return (
            <StyledNavbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#pablo">{this.getBrand()}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.mobileSidebarToggle}/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <HeaderLinks auth={this.props.auth}/>
                </Navbar.Collapse>
            </StyledNavbar>
        );
    }
}

export default Header;
