import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
     componentWillMount() {
         if (this.props.iconName != null) {
            this.setState({ icon: this.props.iconName });
        }
        else {
            this.setState({ icon: '' });
        }
     }

    render() {
        return (
            <View style={styles.inputContainer}>
                <Icon name={this.state.icon} size={25} color="#929292" />
                <TextInput 
                    style={styles.input} 
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={this.props.password}
                    placeholder={this.props.placeholder} 
                />
            </View>
        ); 
    }
}

const styles = {
    input: {
        paddingVertical: 0,
        height: 30,
        flex: 1,
        paddingLeft: 5 
    },
    inputContainer: {
        borderColor: '#929292',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginVertical: 5 
    }
}

export { Input };