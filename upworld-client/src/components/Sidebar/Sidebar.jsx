import React, {Component} from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import HeaderLinks from 'components/Header/HeaderLinks.jsx';

// backgroundImage for Sidebar
import image from 'assets/img/photo-1508243771214-6e95d137426b.jpg';
// image for avatar in Sidebar
import avatar from 'assets/img/default-avatar.png';
// logo for sidebar
import logo from 'assets/img/upworld_logo_onwhite.png';

import dashRoutes from 'routes/dash.jsx';

const bgImage = {backgroundImage: "url("+image+")"};

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            openAvatar: false,
            openComponents: (this.activeRoute("/components") !== '' ? true:false),
            openForms: (this.activeRoute("/forms") !== '' ? true:false),
            openTables: (this.activeRoute("/tables") !== '' ? true:false),
            openMaps: (this.activeRoute("/maps") !== '' ? true:false),
            openPages: (this.activeRoute("/pages") !== '' ? true:false),
            isWindows: (navigator.platform.indexOf('Win') > -1 ? true : false),
            width: window.innerWidth
        }
    }
    activeRoute(routeName) {
        return this.props.history.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        const { userProfile } = this.props.auth;

        return (

            <div className="sidebar" data-color="black" data-image={image}>
                <div className="sidebar-background" style={bgImage}></div>
                <div className="logo">
                	<a href="https://www.upworldinc.org/" className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={logo} alt="react-logo" />
                        </div>
                	</a>
                	<a href="https://www.upworldinc.org/" className="simple-text logo-normal">
                		Upworld inc
                	</a>
                </div>
                <div className="sidebar-wrapper" ref="sidebarWrapper">
                {this.props.auth.isAuthenticated() ?
                    <div className="user">
                        <div className="photo">
                            <img src={ userProfile.picture } alt="Avatar"/>
                        </div>
                        <div className="info">
                            <a onClick={ ()=> this.setState({ openAvatar: !this.state.openAvatar })}>
                                <span>
                                    {userProfile.nickname}
                                    <b className={this.state.openAvatar ? "caret rotate-180":"caret"}></b>
                                </span>
                            </a>
                            <Collapse in={this.state.openAvatar}>
                                <ul className="nav">
                                    <li>
                						<a>
                							<span className="sidebar-mini">MP</span>
                							<span className="sidebar-normal">My Profile</span>
                						</a>
                					</li>
                					<li>
                						<a>
                							<span className="sidebar-mini">EP</span>
                							<span className="sidebar-normal">Edit Profile</span>
                						</a>
                					</li>
                					<li>
                						<a>
                							<span className="sidebar-mini">S</span>
                							<span className="sidebar-normal">Settings</span>
                						</a>
                					</li>
                                </ul>
                            </Collapse>
                        </div>
                    </div> : null}

                    <ul className="nav">
                        {/* If we are on responsive, we want both links from navbar and sidebar
                            to appear in sidebar, so we render here HeaderLinks */}
                        { this.state.width <= 992 ? (<HeaderLinks auth={this.props.auth}/>):null }
                        {/*
                            here we render the links in the sidebar
                            if the link is simple, we make a simple link, if not,
                            we have to create a collapsible group,
                            with the speciffic parent button and with it's children which are the links
                        */}
                {this.props.auth.isAuthenticated() ?
                        
                        
                            dashRoutes.map((prop,key) => {
                                var st = {};
                                st[prop["state"]] = !this.state[prop.state];
                                if(prop.collapse){
                                    return (
                                        <li className={this.activeRoute(prop.path)} key={key}>
                                            <a onClick={ ()=> this.setState(st)}>
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}
                                                   <b className={this.state[prop.state] ? "caret rotate-180":"caret"}></b>
                                                </p>
                                            </a>
                                            <Collapse in={this.state[prop.state]}>
                                                <ul className="nav">
                                                    {
                                                        prop.views.map((prop,key) => {
                                                            return (
                                                                <li className={this.activeRoute(prop.path)} key={key}>
                                                                    <NavLink {...this.props} to={prop.path} className="nav-link" activeClassName="active">
                                                                        <span className="sidebar-mini">{prop.mini}</span>
                                                                        <span className="sidebar-normal">{prop.name}</span>
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </Collapse>
                                        </li>
                                    )
                                } else {
                                    if(prop.redirect){
                                        return null;
                                    }
                                    else{
                                        return (
                                            <li className={this.activeRoute(prop.path)} key={key}>
                                                <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                    <i className={prop.icon}></i>
                                                    <p>{prop.name}</p>
                                                </NavLink>
                                            </li>
                                        );
                                    }
                                }
                            })
                        :null}
                    </ul>
                </div>
            </div> 
        );
    }
}

export default Sidebar;
