import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AfterSelectService = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={require('../assets/images/00191-ev-temizligi_thumb_875x500.webp')}
          style={styles.image}
        />
        <Text style={styles.baslik}>Ev Temizliği</Text>
        <View style={styles.cizgi} />
        <View style={styles.secenekContainer}>
          <MaterialIcons style={styles.ikon} name="person" />
          <Text style={styles.text}><Text style={styles.renkli}>6.821</Text> Temizlikçi hazır </Text>
        </View>
        <View style={styles.cizgi} />
        <View style={styles.secenekContainer}>
          <MaterialIcons style={styles.ikon} name="star" />
          <Text style={styles.text}><Text style={styles.renkli}>4.6</Text> ort. puan (<Text style={styles.renkli}>288.717 </Text> onaylı yorum)</Text>
        </View>
        <View style={styles.cizgi} />
        <View style={styles.secenekContainer}>
          <MaterialIcons style={styles.ikon} name="check" />
          <Text style={styles.text}>Yılda <Text style={styles.renkli}>148.001</Text> kişi Ev Temizliği için Hizmetim'e güveniyor</Text>
        </View>
        <View style={styles.cizgi} />
        <View style={styles.secenekContainer}>
          <MaterialIcons style={styles.ikon} name="security" />
          <Text style={styles.text}>Hizmetim Garantisi kapsamındadır</Text>
        </View>
        <View style={styles.cizgi} />
        <Text style={styles.yorumBaslik}>Müşteri yorumları</Text>
        <View style={[styles.secenekContainer, { marginLeft: 20, marginTop: 10, }]}>
          {[...Array(5)].map((_, i) => (
            <MaterialIcons style={styles.yorumIkon} key={i} name="star" />
          ))}
          <Text style={styles.tarih}>19 Nisan 2023</Text>
        </View>
        <Text style={styles.isim}>Ece T.</Text>
        <Text style={styles.yorum}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.cizgi} />
        <View style={[styles.secenekContainer, { marginLeft: 20, marginTop: 10, }]}>
          {[...Array(5)].map((_, i) => (
            <MaterialIcons style={styles.yorumIkon} key={i} name="star" />
          ))}
          <Text style={styles.tarih}>19 Nisan 2023</Text>
        </View>
        <Text style={styles.isim}>Cem Emre K.</Text>
        <Text style={styles.yorum}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.cizgi} />
        <View style={[styles.secenekContainer, { marginLeft: 20, marginTop: 10, }]}>
          {[...Array(5)].map((_, i) => (
            <MaterialIcons style={styles.yorumIkon} key={i} name="star" />
          ))}
          <Text style={styles.tarih}>19 Nisan 2023</Text>
        </View>
        <Text style={styles.isim}>Tuğrul A.</Text>
        <Text style={styles.yorum}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.cizgi} />
        <TouchableOpacity>
          <Text style={[styles.yorumBaslik, { color: '#2cb34f', textAlign: 'center', marginBottom: 50 }]}>Tüm yorumları oku</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Teklif Al</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  baslik: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 20,
  },
  ikon: {
    fontSize: 25,
    marginLeft: 17,
    color: '#1cb34f'
  },
  cizgi: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
  },
  renkli: {
    color: '#2cb34f',
    fontWeight: 'bold',
  },
  secenekContainer: {
    flexDirection: 'row',
  },
  yorumBaslik: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
  },
  yorumIkon: {
    fontSize: 13,
    color: '#1cb34f',
  },
  isim: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginLeft: 20,
  },
  yorum: {
    color: 'black',
    fontSize: 13,
    marginLeft: 20,
    marginRight: 20,
  },
  tarih: {
    marginLeft: 220,
    color: 'grey',
    fontSize: 10,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
    height: 35,
    backgroundColor: '#1cb34f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default AfterSelectService;