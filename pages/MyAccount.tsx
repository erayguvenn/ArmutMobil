import React from 'react';
import { Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type MyAccountScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MyAccount'>;
};

function MyAccount({ navigation }: MyAccountScreenProps) {
    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <Button title="Giriş Yap" onPress={handleGoToLogin} />
    );
}

export default MyAccount;
