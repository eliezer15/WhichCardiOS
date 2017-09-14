import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RegistrationContainer from './App/Components/Registration/RegistrationContainer';
import CategoriesForm from './App/Components/Forms/CategoriesForm';

export default class App extends Component {
    render() {
        let categories = [
            { name: 'Gas' },
            { name: 'Restaurants' },
            { name: 'Groceries' },
            { name: 'Travel'},
            { name: 'Gas' },
            { name: 'Restaurants' },
            { name: 'Groceries' },
            { name: 'Travel'},
            { name: 'Gas' },
            { name: 'Restaurants' },
            { name: 'Groceries' },
            { name: 'Travel'}
        ];
        return (
            <CategoriesForm categories={categories} />
        );
    }
}