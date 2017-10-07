'use strict';
import React from 'react';
import { Text, ListView, } from 'react-native';
import UserRepository from '../Business/Repository';

export default class Recommendation extends React.Component {
    constructor(props) {
        super(props)

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.recommendations),
            showProgress: true
        };
    }

    render() {
        return (
            <Text>Hello world</Text>
        );
    }


}