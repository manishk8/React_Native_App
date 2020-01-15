import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../layout/Header';

const data = [
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    },
    {
        name: "Manish Kumar",
        job: "Software Engineer"
    }
]

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header />
                {
                    data.map((data, id) =>
                        <View style={styles.body} key={id} >
                            <View style={styles.imageBlock}>
                                <Image style={styles.avatar} source={{ uri: 'https://lh3.googleusercontent.com/-_TDThiLxgDU/V3AMiEqdMjI/AAAAAAAAABk/ox4lNcFQetwuOYm2nmJCUbnAOQhQx_cwACEwYBhgL/w139-h140-p/9%255B1%255D.jpg' }} />
                            </View>
                            <View style={styles.textBlock}>
                                <View>
                                    <Text style={styles.name}>{data.name}</Text>
                                    <Text style={styles.info}>{data.job}</Text>
                                </View>
                                <View>
                                    <Button
                                        color="orange"
                                        title="View Profile"
                                        style={styles.btn}
                                        onPress={() => this.props.navigation.navigate('Profile')}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    body: {
        marginTop: 24,
        marginBottom: 24,
        marginLeft: 16,
        marginRight: 16,
        display: "flex",
        flexDirection: "row"
    },
    btn: {
        backgroundColor: "orange"
    },
    imageBlock: {
        display: "flex",
        marginRight: 16
    },
    textBlock: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "#434343",
        borderBottomWidth: 1,
        marginBottom: 8,
        justifyContent: "space-between"
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "white",
    },
    name: {
        fontSize: 22,
        color: "#434343",
        fontWeight: '600',
    },
    info: {
        fontSize: 16,
        color: "#808080",
        marginTop: 10
    },
});

export default Contact;