import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

export default class Header extends Component {
    render() {
        var navigator = this.props.navigator;
        return (
            <ToolbarAndroid
                title={this.props.title}
                navIcon={require('./icons/ic_menu_white_24dp.png')}
                style={styles.toolbar}
                titleColor={'white'}
            // onIconClicked={this.props.sidebarRef} 
            />
        );
    }
};