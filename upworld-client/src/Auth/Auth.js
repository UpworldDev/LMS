import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    //audience: AUTH_CONFIG.apiUrl,
    audience: 'upworld',
    responseType: 'token id_token',
    scope: 'openid profile read:messages'
  });

  userProfile = {
    nickname: "",
    picture: null
  };
  
  constructor() {
    this.setUserProfile = this.setUserProfile.bind(this)
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    console.log('in handleAuthentication')
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('successfully authed')
        this.setSession(authResult);
        //history.replace('/dashboard');
      } else if (err) {
        history.replace('/dashboard');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this.setUserProfile(profile);
        // navigate to the home route
        history.replace('/dashboard');
      }
    });
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    if (this.isAuthenticated()) {
      let accessToken = this.getAccessToken();
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          this.userProfile = profile;
        }
        cb(err, profile);
      });
    } 
  }

  setUserProfile(profile){
    this.userProfile = profile;
  }
  
  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = {
      nickname: "",
      picture: null
    };
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    if (!localStorage.getItem("expires_at")) {
      return false;
    }
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log(expiresAt);
    return new Date().getTime() < expiresAt;
  }
}
