// HomePage.js

import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    DefaultPage: undefined;
    Login: undefined;
};

type DefaultPageProps = {
    navigation: StackNavigationProp<RootStackParamList, 'DefaultPage'>;
};

const DefaultPage = ({ navigation }: DefaultPageProps) => {
    return (
        <View>
            <Button
                title="Go to Detail Page"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default DefaultPage;
