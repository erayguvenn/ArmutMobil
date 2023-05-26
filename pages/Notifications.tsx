import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      userId: null,
      workerId: null,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getWorkList = async () => {
    try {
      const response = await axios.get('http://3.127.53.229:60001/api/WorkListing');
      const data = response.data;
      const workList = data.filter((item) => item.userId === this.state.userId);
      workList.forEach((item) => {
        this.getBids(item.id);
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  getBids = async (id) => {
    try {
      const response = await axios.get(`http://3.127.53.229:60001/api/Bids/${id}`);
      const bids = response.data;

      if (bids.length > 0) {
        this.setState((prevState) => ({ data: [...prevState.data, bids], loading: false }));
      } else {
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const parsedUserData = JSON.parse(userData);
        const { id } = parsedUserData;
        this.setState({ userId: id });
        this.getWorkList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleAccept = (bidId) => {
    // Burada kabul işlemi gerçekleştirilir.
    console.log(`Bid accepted: ${bidId}`);
  };

  handleReject = (bidId) => {
    // Burada reddetme işlemi gerçekleştirilir.
    console.log(`Bid rejected: ${bidId}`);
  };

  renderCards() {
    const { data } = this.state;

    if (!data) {
      return <Text>No data available</Text>;
    }

    return data.map((items, index) => (
      <View key={index}>
        <Text style={styles.sectionTitle}>{index + 1}. iş</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>Teklif</Text>
              <Text style={styles.title}>Mesaj</Text>
              <Text style={styles.title}>Çalışan</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.content}>{item.price}</Text>
              <Text style={styles.content}>{item.message}</Text>
              <Text style={styles.content}>{item.workerName} {item.workerSurname}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.acceptButton]}
                onPress={() => this.handleAccept(item.id)}
              >
                <Text style={styles.buttonText}>Kabul Et</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.rejectButton]}
                onPress={() => this.handleReject(item.id)}
              >
                <Text style={styles.buttonText}>Reddet</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          this.renderCards()
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    width: '33%',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  content: {
    width: '33%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: 'green',
    marginRight: 8,
  },
  rejectButton: {
    backgroundColor: 'red',
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
