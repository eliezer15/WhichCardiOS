import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Recommendations from './App/Components/Recommendations';

export default class App extends Component {
    render() {
        let recommendations = [
            { category: 'Gas', creditCards: [{name:'Venture'},{name:'Amex'},{name:'Fargo'}]},
            { category: 'Restaurants', creditCards: [{name:'Amex'}]},
            { category: 'Travel', creditCards: [{name:'Discover'}]},
            { category: 'Wholesale', creditCards: [{name:'Wells Fargo'}]}
        ];
        return (
            <Recommendations recommendations={recommendations} />
        );
    }
}