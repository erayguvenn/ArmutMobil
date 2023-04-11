import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ChangePassword = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.baslik}>Şifre değiştir</Text>
                <View>
                    <Text style={styles.label}>Eski şifre</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Yeni şifre</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Yeni şifre tekrar</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Şifreyi değiştir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    baslik: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
    },
    input: {
        width: "90%",
        height: 40,
        borderColor: "#AEC2B6",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 16,
    },
    label: {
        fontWeight: "bold",
        color: "black",
        marginBottom: 5,
        marginLeft: 20,
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

export default ChangePassword;