'use strict';
import React from 'react';
import { View, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class NameTextbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={tyles.view}>
                <TextInput 
                    style={styles.textbox}
                    placeholder='First Name'
                    onChangeText={(text) => this.props.setName(text)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textbox : {
        fontSize: 50
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

NameTextbox.PropTypes = {
    setName: PropTypes.func.isRequired
};