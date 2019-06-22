/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from '../BaseStyle';

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={{fontSize: 20}}>Carpool</Text>
        </View>

        {/* TODO: Buttons currently extend all the way down the column */}
        <View style={styles.buttonGroup}>
          <Button title="Login" onPress={() => navigate('Login')}></Button>
          <Button title="Sign Up" onPress={() => navigate('SignUp')}></Button>
        </View>
      </View>
    );
  }
}

