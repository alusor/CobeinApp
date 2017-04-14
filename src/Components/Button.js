import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>        
        );
    }
}
const styles = {
    buttonStyle: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
};

export { Button };