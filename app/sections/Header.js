import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    toggleUser = ()=> {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Text 
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android'? '#ff0000':'#35605a',
        flex: 1
    }
});