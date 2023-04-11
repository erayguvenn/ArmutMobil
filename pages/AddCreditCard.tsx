import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput ,Image} from "react-native";

const AddCreditCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Kart Numarası</Text>
        <TextInput
          style={[styles.input,{marginBottom: 40}]}
          keyboardType="numeric"
          maxLength={16}
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
  
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Son Kullanma Tarihi</Text>
            <TextInput
              style={[styles.input, { width: '100%' }]}
              keyboardType="numeric"
              maxLength={7}
              placeholder="MM/YY"
              value={expiryDate}
              onChangeText={(text) => setExpiryDate(text)}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={[styles.input, { width: '100%' }]}
              keyboardType="numeric"
              maxLength={3}
              placeholder="CVV"
              value={cvv}
              onChangeText={(text) => setCvv(text)}
            />
          </View>
        </View>
        <View>
            <Image
                source={require('../assets/images/visa-mastercard-logo.png')} 
                style={styles.image}
            />
        </View>
        <Text style={{textAlign:'center',fontWeight:'bold'}}>Kredi kartı neden gerekli?</Text>
        <Text style={{fontFamily:'Montserrat',fontSize:14,lineHeight:20}}>
            Rezervasyonu tamamlamak için ödemeni alıyoruz ve hizmet tamamlanınca hizmet verenin hesabına aktarıyoruz. 24 saat 
            öncesine kadar rezervasyonu iptal etmen gerekir veya hizmet verene bağlı bir nedenle hizmet alamazsan ödemeni iade ediyoruz.
        </Text>
        <View>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      marginTop: 40,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    column: {
      flex: 1,
      marginRight: 10,
      marginLeft: 10,
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
    image: {
        width: 150,
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
  });

export default AddCreditCard;