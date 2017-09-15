'use strict';
import React from 'react';
import { KeyboardAvoidingView, Keyboard, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const activeColor = '#2196f3';
const inactiveColor = '#d3d3d3';

export default class CategoriesTextbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isKeyboardUp: false,
            text: ''
        };
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this._keyboardDidShow());
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this._keyboardDidHide());
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow () {
        this.setState({isKeyboardUp: true});
    }
    
    _keyboardDidHide () {
        this.setState({isKeyboardUp: false});
    }

    renderAddIcon() {
        let color = (this.state.text === '' && !this.state.isKeyboardUp)
            ? activeColor
            : inactiveColor;
        return (
            <TouchableOpacity onPress={() => this.refs.TextInput.focus()} >
                <Ionicons
                    style={styles.addButton}
                    name='ios-add'
                    size={35}
                    color={color} />
            </TouchableOpacity>
        );
    }

    renderConfirmIcon() {
        let color = this.state.isKeyboardUp && this.state.text !== ''
            ? activeColor
            : inactiveColor;

        return (
            <TouchableOpacity onPress={() => this.submitText()} >
                <Ionicons 
                    style={styles.confirmButton}
                    name='ios-add-circle' 
                    size={35} 
                    color={color}/>
            </TouchableOpacity>
        );
    }

    onChangeText(text) {
        this.setState({text: text});
    }

    submitText() {
        this.props.saveCategory(this.state.text);        
        this.setState({text:''});
    }

    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'>

                <View style={[styles.footer]}>
                    {this.renderAddIcon()}

                    <TextInput 
                        style={styles.addNewTextbox} 
                        placeholder='Add New Category'
                        ref='TextInput'
                        onChangeText={(text) => this.onChangeText(text)}
                        returnKeyType='done'
                        value={this.state.text}
                        onSubmitEditing={() => this.submitText()} />

                    {this.renderConfirmIcon()}
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#d7d7d7',    
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    addNewTextbox: {
        fontSize:18,
        marginRight: 120
    },
    confirmButton: {
        marginRight:20
    },
    addButton: {
        marginLeft:20,
        marginRight:20
    }
});