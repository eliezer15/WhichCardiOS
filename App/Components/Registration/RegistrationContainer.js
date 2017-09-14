'use strict';
import React from 'react';
import NameTextbox from '../Forms/NameTextbox';

export default class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    setName = (name) => {
        console.log('called');
        let user = this.state.user;
        user.name = name;

        this.setState({user: user});

        console.log(this.state.user);
    }

    render() {
        return (
            <NameTextbox setName={this.setName} />
        )
    }
}