import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RegistrationContainer from './App/Components/Registration/RegistrationContainer';
import CategoriesForm from './App/Components/Forms/CategoriesForm';

export default class App extends Component {
    render() {
        let categories = [
            'Gas',
            'Restaurants',
            'Travel',
            'Wholesale'
        ];
        return (
            <CategoriesForm categories={categories} />
        );
    }
}