import React, { useState } from 'react';
import { TouchableOpacity, Linking,Text, View,TextInput,StyleSheet,ScrollView } from 'react-native';

const ContactHizmetim = () => {
  const [name, setName] = useState('');
  const email = 'omer.70942@gmail.com';
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {   
    Linking.openURL(`mailto:${email}?subject=${subject}&body=İsim: ${name}<br><br>${message}`);
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>Adınız:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Adınız' />

      <Text style={styles.label}>Konu:</Text>
      <TextInput style={styles.input} value={subject} onChangeText={setSubject} placeholder='Konu'/>

      <Text style={styles.label}>Mesajınız:</Text>
      <TextInput style={styles.inputMesaj} value={message} onChangeText={setMessage} multiline={true} numberOfLines={4} placeholder='Mesajınız'/>

      <TouchableOpacity style={styles.button} onPress={sendMail}>
            <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: 40,
      },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      input: {
        height: 40,
        borderColor: '#AEC2B6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 40,
        fontSize: 16,
      },
      button: {
        backgroundColor: "#2cb34f",
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    inputMesaj:{
        height: 90,
        borderColor: '#AEC2B6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 40,
        fontSize: 16,
    },
});

export default ContactHizmetim;
