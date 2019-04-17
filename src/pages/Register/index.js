import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            registerLoading: false,
        }
    }

    register = async () => {
        this.setState({ registerLoading:true });
        const { email, password, name } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            const userData = firebase.auth().currentUser;
            if(userData) {
                firebase.database().ref('/users').push(
                    { 
                        email,
                        name,
                        uid: userData.uid, 
                    }
                );
                this.props.navigation.navigate("Login");
            }else {
                this.setState({ registerLoading:false });
                alert("Error!");
            }
        }).catch(err => {
            this.setState({ registerLoading:false });
            alert(err.message);
        });
    }

    render() {
        return (
            <View style={styles.container}>
               
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={name => this.setState({ name })}
                />

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
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity disabled={this.state.registerLoading} style={styles.button} onPress={this.register}>
                    {this.state.registerLoading &&
                        <ActivityIndicator size="small" color="#fff" /> 
                    }
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.registerLoading} style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}