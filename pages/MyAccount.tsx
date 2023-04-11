import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type MyAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccount'>;
};

function MyAccount({ navigation }: MyAccountScreenProps) {
    const handleGoToLogin = () => {
        navigation.navigate('MyAccountAfterLogin');
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
            <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2cb34f",
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginVertical:"50%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MyAccount;
