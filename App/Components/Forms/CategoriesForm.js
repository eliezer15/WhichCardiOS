'use strict';
import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import CategoriesTextbox from './CategoriesTextbox';

export default class CategoriesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: this.props.categories
        };
    }

    saveCategory(category) {
        let categories = this.state.categories;
        categories.push({name: category});
        this.setState({ categories: categories });
    }

    renderItem(item) {
        console.log(item);
        return (
            <View style={[styles.rowData]}>
                <Text style={styles.category}>{item.name}</Text>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.listViewWrapper}>
                    <FlatList
                        data={this.state.categories}
                        renderItem={({item}) => this.renderItem(item)}
                        keyExtractor={category => category.name} />
                </View>
                <CategoriesTextbox saveCategory={(category) => this.saveCategory(category)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowData: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginTop:0,
        width: Dimensions.get('window').width,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    listViewWrapper: {
        paddingTop:20,
        flex: 8
    },
    category: {
        fontSize:18
    }
});