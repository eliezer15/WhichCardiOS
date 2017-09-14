'use strict';
import React from 'react';
import {  KeyboardAvoidingView, View, StyleSheet, TextInput, Text, ListView, Dimensions, TouchableHighlight } from 'react-native';
import defaultStyles from '../../Resources/default-styles'
import { Ionicons } from '@expo/vector-icons';

export default class CategoriesForm extends React.Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            categories: this.props.categories,
            dataSource: ds.cloneWithRows([]),
            addNewCategory: false
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.state.categories),
            addNewCategory: false
        });
    }

    renderRow(category) {
        return (
            <View style={[styles.rowData]}>
                <Text>{category.name}</Text>
            </View>
        );
    }

    render() {
        return(
            <KeyboardAvoidingView 
                style={[defaultStyles.container, styles.wrapper]}
                behavior='padding'>

                <View style={styles.listViewWrapper}>
                    <ListView 
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowdata) => this.renderRow(rowdata)} />
                </View>
                <View style={[defaultStyles.container, styles.footer]}>
                    <TextInput placeholder='Add New'/>
                    <Ionicons name='md-add-circle' size={45} color='#2196f3' />
                </View>

            </KeyboardAvoidingView>
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
        flexDirection: 'column'
    },
    listViewWrapper: {
        paddingTop:20,
        flex: 7
    },
    footer: {
        flex:1,
        borderTopWidth: 1,
        borderColor: '#d7d7d7',    
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        flexDirection:'row'
    }
});