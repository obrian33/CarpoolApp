import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../BaseStyle';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.loginScreenContainer}>
                <View style={styles.loginTitle}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                </View>
                <View style={styles.textGroup}>
                    <Text>User Name</Text>
                    <TextInput style={styles.text}></TextInput>
                    <Text>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.text}></TextInput>
                    <Button style={styles.button} title="Ok" onPress={() => navigate('CarpoolSignee')}></Button>
                </View>
            </View>
        );
    }
}