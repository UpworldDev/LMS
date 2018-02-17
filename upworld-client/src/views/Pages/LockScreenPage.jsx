import React, { Component } from 'react';
import {
    FormGroup, FormControl
} from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from 'assets/img/default-avatar.png';

class LockScreenPage extends Component{
    render(){
        return (
            <form className="ng-untouched ng-pristine ng-valid">
                <div className="user-profile">
                    <div className="author">
                        <img alt="..." className="avatar" src={avatar} />
                    </div>
                    <h4>Tania Andrew</h4>
                    <FormGroup>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                        />
                    </FormGroup>
                    <Button wd neutral round>
                        Unlock
                    </Button>
                </div>
            </form>
        );
    }
}

export default LockScreenPage;
