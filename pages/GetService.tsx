import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import CardGroup from '../components/CardGroup';
import axios from 'axios';

interface IService {
    id: string;
    name: string;
    imageUrl: string;
    parentId: number;
}

const baseURL = 'http://3.127.53.229:60001/api/Workcategories';

interface IState {
    responseData: IService[];
    isLoading: boolean;
    error: Error | null;
    searchText: string;
    filteredData: IService[];
}

export class GetService extends Component<{}, IState> {
    state: IState = {
        responseData: [],
        isLoading: false,
        error: null,
        searchText: '',
        filteredData: [],
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios
            .get(baseURL)
            .then((response) => {
                this.setState({ responseData: response.data, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error, isLoading: false });
                console.error(error);
            });
    }

    handleSearch = () => {
        const { responseData, searchText } = this.state;
        const filteredData = responseData.filter(
            (item) => item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        this.setState({ filteredData });
    };

    render() {
        const { responseData, isLoading, error, searchText, filteredData } = this.state;

        if (isLoading) {
            return <Text>Loading...</Text>;
        }

        if (error) {
            return <Text>{error.message}</Text>;
        }

        return (
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="İş Ara..."
                            value={searchText}
                            onChangeText={(text) => this.setState({ searchText: text })}
                        />
                        <TouchableOpacity style={styles.searchButton} onPress={this.handleSearch}>
                            <Text style={styles.searchButtonText}>ARA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {filteredData.length > 0 && (
                    <>
                        <Text style={styles.resultText}>Sonuçlar:</Text>
                        <CardGroup data={filteredData} />
                    </>
                )}
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Temizlik</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 1)} />
                    )}
                </View>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Nakliyat ve Depolama</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 3)} />
                    )}
                </View>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Tadilat, Dekorasyon ve İnşaat</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 2)} />
                    )}
                </View>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Özel Ders</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 5)} />
                    )}
                </View>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Sağlık ve Güzellik</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 6)} />
                    )}
                </View>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Montaj ve Tamir</Text>
                    {responseData && (
                        <CardGroup data={responseData.filter((item) => item.parentId == 4)} />
                    )}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
        padding: 8,
        borderRadius: 10,
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#2cb34f',
        borderRadius: 5,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    resultText: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    cardTitle: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default GetService;
