import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { createAppContainer, createStackNavigator, withNavigation } from 'react-navigation'; // Version can be specified in package.json
import Footer from './layout/Footer';
import Header from './layout/Header';
import News from './dashboard/News';
import Home from './dashboard/Home';
import Contact from './dashboard/Contact';

const RootStack = createStackNavigator(
    {
        Home: { screen: Home },
        News: { screen: News },
        Contact: { screen: Contact },
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class Main extends React.Component {
    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                    <AppContainer />
                </ScrollView>
                <Footer />
            </View>
        )
    }
}