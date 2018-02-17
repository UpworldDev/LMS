import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        // console.log(`HeaderLink Props: `, this.props)
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Notification 1</MenuItem>
                        <MenuItem eventKey={2.2}>Notification 2</MenuItem>
                        <MenuItem eventKey={2.3}>Notification 3</MenuItem>
                        <MenuItem eventKey={2.4}>Notification 4</MenuItem>
                        <MenuItem eventKey={2.5}>Another notifications</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Account</NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something</MenuItem>
                        <MenuItem eventKey={2.4}>Another action</MenuItem>
                        <MenuItem eventKey={2.5}>Something</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.5}>Separated link</MenuItem>
                    </NavDropdown>
                    {!this.props.auth.isAuthenticated() ?
                        <NavItem eventKey={3} onClick={() => this.props.auth.login()}>Log in</NavItem>:
                        <NavItem eventKey={3} onClick={() => this.props.auth.logout()}>Log out</NavItem>
                    }
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
