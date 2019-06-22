import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Login from './Login';
import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import HomeScreen from './Home/HomeScreen';
import CarpoolSigneeScreen from './CarpoolSignees/CarpoolSigneeScreen';

const MainNavigator = createStackNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        CarpoolSignee: { screen: CarpoolSigneeScreen}
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'blue',
                borderBottomColor: 'blue'
            }
        }
    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}