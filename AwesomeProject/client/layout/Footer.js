'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

class Footer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.footer}>
                <Button
                    title="Home"
                    onPress={() => navigate('Home')}
                />
                <Button
                    title="News"
                    onPress={() => navigate('News')}
                />
                <Button
                    title="Contact"
                    onPress={() => navigate('Contact')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#020254",
        height: 56,
        flexDirection: "row"
    }
});

export default Footer;