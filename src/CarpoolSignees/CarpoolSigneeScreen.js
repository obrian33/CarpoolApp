import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../BaseStyle';

export default class CarpoolSigneeScreen extends Component {
    availableUsers = [
        { id: 'O\'Brian', availability: true },
        { id: 'Nima', availability: false, },
        { id: 'Danielle', availability: true },
        { id: 'Brian', availability: false }]; // Eventually be a webcall

    state = {
        users: this.availableUsers
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, paddingLeft: 20 }}>Available Carpoolees</Text>
                {this.availableUsers.map((user, index) => {
                    return <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }} key={index}>
                        <Text>{user.id}</Text>
                        <Switch value={user.availability} onValueChange={(value) => {
                            user.availability = value;
                            this.setState({
                                users: this.availableUsers.filter( x => x.id !== user.id).push(user)
                            });
                        }} title="Sign"></Switch>
                    </View>
                })}
            </View>
        )
    }
}