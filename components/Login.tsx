import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { loginRequest } from './authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});


  useEffect(() => {
    if (userId) {
      handleGetUserData();
    }
  }, [userId]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://3.127.53.229:60001/api/Auth/login', {
        email,
        password,
      });
      setUserId(response.data);
      console.log(response.headers["set-cookie"]);
      const setCookie = response.headers["set-cookie"];
      if (setCookie !== undefined) {
        await AsyncStorage.setItem('authToken', JSON.stringify(setCookie));
      }
      await AsyncStorage.setItem('isLoggedIn', 'true');

    } catch (error) {
      console.error(error);
    }
  };

  const handleGetUserData = async () => {
    try {
      const response = await axios.get(`http://3.127.53.229:60002/api/User/${userId}`);
      //console.log(response.data);
      setUserData(response.data);
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(response.data));
        // console.log(await AsyncStorage.getItem('userData'));
        console.log('User data saved successfully');
      } catch (error) {
        console.log('Error saving user data: ', error);
      }


    } catch (error) {
      console.log(userId)
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta adresinizi girin"
        placeholderTextColor="#9B9B9B"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi girin"
        placeholderTextColor="#9B9B9B"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF6F3C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Login;
