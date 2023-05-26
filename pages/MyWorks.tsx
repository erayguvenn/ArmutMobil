import { Text, View, ScrollView, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import axios from 'axios';

export default class MyWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            isModalVisible: false,
            teklif: '',
            mesaj: '',
            worklistingId: '',
            userId: null,
            workerId: null,
        };
    }

    componentDidMount() {
        this.fetchData();
        this.getUserData();
    }

    fetchData = async () => {
        try {
            const response = await axios.get('http://3.127.53.229:60001/api/WorkListing');
            const data = response.data;
            this.setState({ data, loading: false });
        } catch (error) {
            console.error(error);
            this.setState({ loading: false });
        }
    };


    getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                const parsedUserData = JSON.parse(userData);
                const { id } = parsedUserData;
                this.setState({ userId: id });
                this.fetchWorkerData(id);
            }
        } catch (error) {
            console.error(error);
        }
    };
    fetchWorkerData = async (id: any) => {
        try {
            const response = await axios.get(`http://3.127.53.229:60001/api/Worker/${id}`);
            const workerData = response.data;
            // İşlem yapmak veya veriyi kaydetmek için burada gerekli kodları ekleyebilirsiniz
            this.setState({ workerId: workerData[0].workerId });
        } catch (error) {
            console.error(error);
        }
    };
    handleButtonPress = (id) => {
        this.setState({ isModalVisible: true, worklistingId: id });
    };

    handleModalClose = () => {
        this.setState({ isModalVisible: false, teklif: '', mesaj: '', worklistingId: '' });
    };

    handleTeklifGonder = async () => {
        const { teklif, mesaj, worklistingId, userId, workerId } = this.state;
        const bidData = {
            worklistingId: worklistingId,
            workerId: workerId,
            price: parseInt(teklif),
            message: mesaj,
            accepted: false
        };
        try {
            const response = await axios.post('http://3.127.53.229:60001/api/Bids/bids', bidData);
            const createdBid = response.data;
            console.log(createdBid);
            Alert.alert('Başarılı', 'Teklif başarıyla gönderildi');
        } catch (error) {
            console.error(error);
            Alert.alert('Hata', 'Bir hata oluştu');
        }
        this.setState({ isModalVisible: false, teklif: '', mesaj: '', worklistingId: '' });
    };

    render() {
        const { data, loading, isModalVisible, teklif, mesaj } = this.state;

        return (
            <ScrollView>
                <View>
                    <Text style={styles.heading}>Temizlik İşleri</Text>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : data ? (
                        data.map((item, index) => (
                            <View key={item.id} style={styles.card}>
                                <View style={styles.header}>
                                    <Text style={styles.title}>Sorular</Text>
                                    <Text style={styles.title}>Cevaplar</Text>
                                </View>
                                {item.ruleFill && (
                                    <View style={styles.table}>
                                        {JSON.parse(item.ruleFill).sorular.map((soru, soruIndex) => (
                                            <View key={soruIndex} style={styles.row}>
                                                <Text style={styles.cell}>{soru}</Text>
                                                <Text style={styles.cell}>{JSON.parse(item.ruleFill).cevaplar[soruIndex]}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={() => this.handleButtonPress(item.id)}
                                >
                                    <Text style={styles.buttonText}>Teklif Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text>No data available</Text>
                    )}

                    <Modal visible={isModalVisible} animationType="slide">
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Teklif Ver</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Teklif"
                                keyboardType="numeric"
                                value={teklif}
                                onChangeText={(value) => this.setState({ teklif: value })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mesaj"
                                value={mesaj}
                                onChangeText={(value) => this.setState({ mesaj: value })}
                            />
                            <View style={styles.modalButtonsContainer}>
                                <Button title="Vazgeç" onPress={this.handleModalClose} color="#888" />
                                <Button title="Teklif Gönder" onPress={this.handleTeklifGonder} />
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 100,
        marginLeft: 50,
    },
    table: {
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    cell: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 16,
        backgroundColor: '#2cb34f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 8,
        marginBottom: 16,
        padding: 8,
        fontSize: 16,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
};
