import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView,Image,Alert,Linking, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


type MyAccountAferLoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MyAccountAfterLogin'>;
};

function MyAccountAfterLogin({ navigation }: MyAccountAferLoginScreenProps) {

  const handleGoToMyAccountInformation = () => {
    navigation.navigate('MyAccountInformation');
};
  const handleGoToChangePassword = () => {
    navigation.navigate('ChangePassword');
};
  const handleGoToAddCreditCard = () => {
    navigation.navigate('AddCreditCard');
};
  const handleGoToHizmetAl = () => {
    navigation.navigate('GetService');
};
  const evulateTheHizmetim = () => {
    Alert.alert(
      "Hizmetim",
      "Mobil Uygulamamızı sevdin mi?",
      [
        {
          text: "Evet", onPress: () => console.log("Hizmetim olumlu değerlendirildi")
        },
        { text: "Hayır", onPress: () => console.log("Hizmetim olumsuz değerlendirildi") }
      ]
    );
  };
  const handleGoToContactHizmetim = () => {
    navigation.navigate('ContactHizmetim');
  };

  const handleLogout = async () => {
    try {
      // AsyncStorage'deki verileri temizle
      await AsyncStorage.multiRemove(['authToken', 'isLoggedIn', 'userData']);
      // Login sayfasına yönlendir
      navigation.navigate('Login');
    } catch (error) {
      console.error('Çıkış yaparken bir hata oluştu:', error);
    }
  };

  return (
    <ScrollView>
        <View>
        <Text style={styles.baslik}>Hesabım</Text>
          <View style={{alignItems:'center'}}>
            <Image
              source={require( '../assets/images/logo.png')}
              style={styles.resim}
            />
          </View>
          <Text style={styles.isim}>Ömer Kayaoğlu</Text>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleGoToMyAccountInformation}>
            <Text style={styles.secenek}>
              Hesap Bilgilerim
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleGoToChangePassword}>
            <Text style={styles.secenek}>
              Şifre Değiştir
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <Text style={styles.altBaslik}>Ödeme seçenekleri</Text>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleGoToAddCreditCard}>
            <Text style={styles.secenek}>
              Kredi kartı ekle
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <Text style={styles.altBaslik}>Destek</Text>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleGoToHizmetAl}>
            <Text style={styles.secenek}>
              Hizmet Ver
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer}>
            <Text style={styles.secenek}>
              Arkadaşlarına tavsiye et
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer} onPress={evulateTheHizmetim}>
            <Text style={styles.secenek}>
              Hizmetim'i değerlendir
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer}>
            <Text style={styles.secenek}>
              Yardım merkezi
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleGoToContactHizmetim}>
            <Text style={styles.secenek}>
              Hizmetime ulaş
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer}>
            <Text style={styles.secenek}>
              Veri ve gizlilik
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
          <TouchableOpacity style={styles.secenekContainer} onPress={handleLogout}>
            <Text style={styles.secenek}>
              Çıkış yap
            </Text>
            <MaterialIcons style={styles.ikon} name="chevron-right"/>
          </TouchableOpacity>
          <View style={styles.cizgi}/>
        </View>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  baslik:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  resim:{
    width: 150,
    height: 150,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secenek:{
    fontSize: 15,
    marginTop: 10,
    marginLeft: 20,
  },
  cizgi:{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  altBaslik:{
    fontSize: 30,
    color:'black',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
  },
  isim:{
    marginTop: 10,
    fontSize: 20,
    color:'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ikon:{
    fontSize: 25,
    marginRight: 17,
    marginTop: 10,
    
  },
  secenekContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MyAccountAfterLogin;