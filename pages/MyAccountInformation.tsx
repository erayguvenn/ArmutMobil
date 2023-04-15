import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';

const MyAccountInformation = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    return (
        <ScrollView>
            <View>
                <Text style={styles.baslik}>Hesap bilgilerim</Text>
                <View>
                    <Text style={styles.label}>Ad</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Soyad</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSurname(text)}
                        value={surname}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefon numarası</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Adres</Text>
                    <TextInput style={styles.inputAdres}
                        placeholder="Adres yaz"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => setAddress(text)}
                        value={address}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    baslik: {
        fontSize: 25,
        marginTop: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        color: 'black',
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#AEC2B6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 16,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 20,
        color: 'black',
    },
    inputAdres: {
        width: '90%',
        height: 90,
        borderColor: '#AEC2B6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#2cb34f",
        width: "90%",
        height: 40,
        borderRadius: 10,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
export default MyAccountInformation;