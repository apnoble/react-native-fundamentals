import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import { StackNavigator } from 'react-navigation';


export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state= {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address'
        }
    }

    clearFields=()=> this.setState({name:'', msg:'', email:''});

    sendMessage=()=> {
        Alert.alert(this.state.name,this.state.msg);
        this.props.navigation.goBack();
    };


    render(){
        return (
            <View style={styles.container}>
                <Header message = 'Press to login' />
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
