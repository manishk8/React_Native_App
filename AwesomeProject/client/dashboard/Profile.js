import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Header from '../layout/Header';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Image style={styles.avatar} source={{ uri: 'https://lh3.googleusercontent.com/-_TDThiLxgDU/V3AMiEqdMjI/AAAAAAAAABk/ox4lNcFQetwuOYm2nmJCUbnAOQhQx_cwACEwYBhgL/w139-h140-p/9%255B1%255D.jpg' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Manish Kumar</Text>
                        <Text style={styles.info}>React Native Developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Profile Detail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Contact Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 99,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 8,
        alignSelf: 'center',
        marginTop: 40
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 8,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#434343",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#434343",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 24
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "orange",
    },
});

export default Profile;