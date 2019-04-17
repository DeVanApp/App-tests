import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ToolbarAndroid } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            registerLoading: false,
        }
    }

    onActionSelected = (position) => {
        console.log(position);
    }

    render() {
        return (
            <View>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title="Dvan"
                    titleColor= "#fff"
                    actions = {[
                    {title: "Perfil"},{title: "Novo grupo"}
                    ]}
                    onActionSelected={this.onActionSelected}
                />
            </View>
        );
    }
}