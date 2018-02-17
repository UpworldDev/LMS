import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import Auth from "./Auth/Auth";
import history from "./history";

import App from './containers/App/App.jsx';

import registerServiceWorker from './registerServiceWorker';

import './assets/css/bootstrap.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

const auth = new Auth();

ReactDOM.render(
  <Router history={history}>
    {/* <Switch> */}
    <App auth={auth} history={history} />
    {/* <Route
      path="/"
      name="Home"
      render={(props) => <App auth={auth} {...props} />}
    /> */}
    {/* </Switch> */}
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
