import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Footer from 'components/Footer/Footer.jsx';
import PagesHeader from 'components/Header/PagesHeader.jsx';

// dinamically create pages routes
import pagesRoutes from 'routes/pages.jsx';

import bgImage from 'assets/img/photo-1508243771214-6e95d137426b.jpg';

class Pages extends Component{
    getPageClass(){
        var pageClass = "";
        switch (this.props.location.pathname) {
            case "/pages/login-page":
                pageClass = " login-page";
                break;
            case "/pages/register-page":
                pageClass = " register-page";
                break;
            case "/pages/lock-screen-page":
                pageClass = " lock-page";
                break;
            default:
                pageClass = "";
                break;
        }
        return pageClass;
    }
    componentWillMount(){
        if(document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div>
                <PagesHeader />
                <div className="wrapper wrapper-full-page">
                    <div className={"full-page"+this.getPageClass()} data-color="black" data-image={bgImage}>
                        <div className="content">
                            <Switch>
                                {
                                    pagesRoutes.map((prop,key) => {
                                        return (
                                            <Route path={prop.path} component={prop.component}  key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        </div>
                        <Footer transparent/>
                        <div className="full-page-background" style={{backgroundImage: "url("+bgImage+")"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pages;
