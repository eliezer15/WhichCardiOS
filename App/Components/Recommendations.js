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
            dataSource: ds.cloneWithRows([]),
            showProgress: true
        };
    }

    async componentDidMount() {
        await this.getRecommendations()
    }

    async getRecommendations() {
        let user = new Object();
        user.creditCards = ['cc1', 'cc2'];
        user.shoppingCategories = ['category1', 'category2'];

        await UserRepository.saveUserAsync(user);
        let fetchedUser = await UserRepository.getUserAsync();
    }

    render() {
        return (
            <Text>Hello world</Text>
        );
    }


}