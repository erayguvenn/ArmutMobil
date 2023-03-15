import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GetServiceScreenProps, RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import GetService from '../pages/GetService';

type MyAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccount'>;
};

function DefaultPage({ navigation }: GetServiceScreenProps) {
    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };

    const handleGoToService = () => {
        navigation.navigate('GetService');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lütfen devam etmek için giriş yapınız</Text>
            <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleGoToService}>
                <Text style={styles.buttonText}>Hizmet Al</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DefaultPage;
