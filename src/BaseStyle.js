import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'blue'
    },

    logo: { 
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        justifyContent: 'center'
    },

    button: {
        padding: 10
    },
    
    loginScreenContainer: {
       flex: 1,
       alignItems: 'stretch',
       backgroundColor: 'blue'
    },

    loginTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'yellow'
    },

    textGroup: {
        alignItems: 'center',
        flex: 3,
        backgroundColor: 'white'
    }, 

    text: {
        padding: 10,
        backgroundColor: 'blue',
        width: 300
    }
});