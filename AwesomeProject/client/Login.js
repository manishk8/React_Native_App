import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, TextInput, View } from 'react-native';
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    onPressLogin = () => {

    }

    render() {
        return (
            <View style={styles.formBlock}>
                <TextInput
                    style={styles.inputStyle}
                    // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text}
                    defaultValue="Email"
                />
                <TextInput
                    style={styles.inputStyle}
                    // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text}
                    defaultValue="Password"
                />
                <Button
                    color="#020245"
                    borderRadius="4"
                    marginTop="24"
                    onPress={this.onPressLogin}
                    title="Login"
                    accessibilityLabel="Login"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formBlock: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
    },
    inputStyle: {
        borderBottomColor: "#020245",
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 24
    }
})