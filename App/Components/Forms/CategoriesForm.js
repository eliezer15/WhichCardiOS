'use strict';
import React from 'react';
import { View, StyleSheet, Text, ListView, Dimensions } from 'react-native';
import CategoriesTextbox from './CategoriesTextbox';

export default class CategoriesForm extends React.Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            categories: this.props.categories,
            dataSource: ds.cloneWithRows([]),
        };
    }

    saveCategory(category) {
        let categories = this.state.categories;
        categories.push(category);
        this.setState({
            categories: categories,
            dataSource: this.state.dataSource.cloneWithRows(categories)
        });

        console.log(categories);
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.state.categories),
        });
    }

    renderRow(category) {
        return (
            <View style={[styles.rowData]}>
                <Text style={styles.category}>{category}</Text>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.listViewWrapper}>
                    <ListView 
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowdata) => this.renderRow(rowdata)} />
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