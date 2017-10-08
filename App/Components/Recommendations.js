'use strict';
import React from 'react';
import { Text, View, SectionList, StyleSheet } from 'react-native';

class Separator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.separator}></View>
        );
    }
}

export default class Recommendations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recommendations: this.props.recommendations.map(function(r) { return {key: r.category, data: r.creditCards }})
        };
    }

    _renderHeader(section) {
        return (
            <Text style={styles.category}>{section.key}</Text>
        );
    }

    _renderItem(item) {
        return (
            <Text style={styles.creditCard}>{item.name}</Text>
        );
    }

    render() {
        console.log(this.state.recommendations);
        return (
            <View style={styles.wrapper}>
                <SectionList
                    renderItem={({item}) => this._renderItem(item)}
                    renderSectionHeader={({section}) => this._renderHeader(section)}
                    sections={this.state.recommendations}
                    keyExtractor={(item) => item.name }
                    SectionSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    category: {
        fontSize:20,
        paddingLeft:20
    },
    wrapper: {
        flex: 1
    },
    creditCard: {
        paddingLeft: 20
    },
    separator: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})