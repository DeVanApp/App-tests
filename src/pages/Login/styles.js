import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEAD27',
        padding: 20,
    },
    appName: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50,
        fontWeight: "bold"
    },  
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button: {
        height: 45,
        backgroundColor: '#5D5C5A',
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: '#fff'
    }
});

export default styles;