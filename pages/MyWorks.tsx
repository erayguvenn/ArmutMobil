import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';

export default class MyWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchData();
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

    handleButtonPress = () => {
        console.log('Button çalıştı');
    };

    render() {
        const { data, loading } = this.state;

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
                                <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
                                    <Text style={styles.buttonText}>Teklif Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text>No data available</Text>
                    )}
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
        marginLeft: 50
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
    button: {
        marginTop: 16,
        backgroundColor: '#2cb34f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};
