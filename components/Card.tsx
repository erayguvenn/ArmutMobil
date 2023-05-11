import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface CardProps {
    title: string;
    imageUrl: any;
}

type afterSelect = {
    navigation: StackNavigationProp<RootStackParamList, 'AfterSelectService'>;
};

const openSelectService = ({ navigation }: afterSelect) => {
    console.log("Hizmet seçildi");
    navigation.navigate('AfterSelectService');

}

const Card = ({ title, imageUrl }: CardProps) => {
    return (
        <TouchableOpacity onPress={() => openSelectService}>
            <View style={styles.card}>
                <Image
                    source={imageUrl}
                    style={styles.resim}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 160,
        height: 160,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resim: {
        width: 160,
        height: 130,
        marginBottom: 7,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Card