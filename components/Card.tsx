import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface CardProps {
    title: string;
    imageUrl: any;
    ruleTemplate: any;
}

type afterSelect = {
    navigation: StackNavigationProp<RootStackParamList, 'AfterSelectService'>;
};

const openSelectService = ({ navigation }: afterSelect) => {
    console.log("Hizmet seçildi");
    navigation.navigate('AfterSelectService');
};

const onPressButton = () => {
    // Boş bir fonksiyon
};

const Card = ({ title, imageUrl, ruleTemplate }: CardProps) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.resim}
            />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onPressButton}>
                <Text style={styles.buttonText}>Teklif Al</Text>
            </TouchableOpacity>
        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    resim: {
        width: 160,
        height: 130,
        marginBottom: 7,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#2cb34f',
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 8,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Card;
