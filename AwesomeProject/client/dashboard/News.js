import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '../layout/Header';

export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Header />
                <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center" }}>News</Text>
                <FlatList
                    data={[
                        { key: 'Lorem Ipsum is simply dummy text', details: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' },
                        { key: 'React component that wraps the platform', details: 'he Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). ' },
                        { key: 'The navigation view that will be rendered to the side of the screen and can be pulled in.', details: 'unlocked (default), meaning that the drawer will respond (open/close) to touch gestures. locked- closed, meaning that the drawer will stay closed and not respond to gestures. unlocked (default), meaning that the drawer will respond (open/close) to touch gestures. locked- closed, meaning that the drawer will stay closed and not respond to gestures. unlocked (default), meaning that the drawer will respond (open/close) to touch gestures. locked- closed, meaning that the drawer will stay closed and not respond to gestures. unlocked (default), meaning that the drawer will respond (open/close) to touch gestures. locked- closed, meaning that the drawer will stay closed and not respond to gestures. unlocked (default), meaning that the drawer will respond (open/close) to touch gestures. locked- closed, meaning that the drawer will stay closed and not respond to gestures.' }
                    ]}
                    renderItem={({ item }) => <View style={styles.listBlock} key={item.key} ><Text style={styles.headingText}>{item.key}</Text><Text style={styles.detailText}>{item.details}</Text></View>}
                />
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: "relative"
    },
    listBlock: {
        padding: 12
    },
    headingText: {
        fontSize: 20,
        marginBottom: 8
    },
    detailText: {
        fontSize: 16,
    },
})