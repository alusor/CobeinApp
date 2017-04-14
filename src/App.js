import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Login } from './Views';
class App extends Component {
    render() {
        return (
            <View style={styles.appStyle} >
                <Login />
            </View>
        );
    }
}

const styles = {
    appStyle: {
        flex: 1
    }
};

export default App;