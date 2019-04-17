import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginLoading: false,
        }
    }

    static navigationOptions = {
        header: null,
        };

    // componentDidMount = () => {
    //     (firebase.auth().currentUser &&
    //         this.props.navigation.navigate("Home")
    //     );
    // }

    login = () => {
        this.setState({ loginLoading:true });
        const { email, password } = this.state;

        if(email === "" || password === "") {
            this.setState({ loginLoading:false });
            alert('Preencha todos campos')
        }else {
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
                this.props.navigation.navigate("Home");
            }).catch(err => {
                this.setState({ loginLoading:false });
                alert(err.message);
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>Dvan app</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity disabled={this.state.loginLoading} style={styles.button} onPress={this.login}>
                    {this.state.loginLoading &&
                        <ActivityIndicator size="small" color="#fff" /> 
                    }
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity disabled={this.state.loginLoading} style={styles.button} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}