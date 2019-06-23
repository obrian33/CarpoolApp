import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../BaseStyle';

export default class CarpoolSigneeScreen extends Component {
    availableUsers = ['O\'Brian', 'Nima', 'Danielle', 'Brian']; // Eventually be a webcall


    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, paddingLeft: 20 }}>Available Carpoolees</Text>
                {this.availableUsers.map((users, index) => {
                    return <View style={{flexDirection: 'row', padding: 20, justifyContent: 'space-between'}}key={index}>
                        <Text>{users}</Text>
                        <Switch title="Sign"></Switch>
                    </View>
                })}
            </View>
        )
    }
}