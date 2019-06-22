import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../BaseStyle';

export default class CarpoolSigneeScreen extends Component {
    availableUsers = [ 'O\'Brian', 'Nima', 'Danielle', 'Brian']; // Eventually be a webcall


    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Available Carpoolees</Text>
                {this.availableUsers.map((users, index) => {
                    return <Text key={index}>{users}</Text>
                })}
            </View>
        )
    }
}