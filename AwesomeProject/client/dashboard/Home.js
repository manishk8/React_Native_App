import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import Header from '../layout/Header';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Header />
                <Text>Home Screen</Text>
                {/* <Button
                    title="Go to Contact"
                    style={styles.btn}
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Contact')}
                />
                <Button
                    style={styles.btn}
                    title="Go to Profile"
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button
                    style={styles.btn}
                    color="orange"
                    title="Go to News"
                    onPress={() => this.props.navigation.navigate('News')}
                /> */}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: "relative"
    }
})