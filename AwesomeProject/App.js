import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Contact from './client/dashboard/Contact';
import Profile from './client/dashboard/Profile';
import News from './client/dashboard/News';
import Home from './client/dashboard/Home';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
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
        />
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator(
  {
    Home: Home,
    // Details: DetailsScreen,
    Contact: Contact,
    News: News,
    Profile: Profile
  },
  {
    initialRouteName: 'Home',
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "orange",
  },
});




// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './clinet/Login';
// import Main from './clinet/Main';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Login /> */}
//       <Main />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
// });