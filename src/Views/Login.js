import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../Components';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <View style={styles.generalContainer}>
                <Text style={styles.title} >Iniciar sesión</Text>
                <View style={styles.inputContainer}>
                    <Input iconName='user' placeholder='Número de credencial.'/>
                    <Input iconName='unlock' placeholder='Contraseña.' password/>
                    <Button />
                    <Text style={{
                        fontSize: 12,
                        textAlign: 'center'
                    }}>Olvidé mi contraseña</Text>
                </View>
                
            </View>
        );
    }
}

const styles = {
    generalContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    inputContainer: {
        paddingHorizontal: 50
    }
};

export { Login };
