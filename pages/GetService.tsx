import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
}

export class GetService extends Component<{}, IState> {
    state: IState = {
        responseData: [],
        isLoading: false,
        error: null,
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
    render() {
        const { responseData, isLoading, error } = this.state;

        if (isLoading) {
            return <Text>Loading...</Text>;
        }

        if (error) {
            return <Text>{error.message}</Text>;
        }
        return (
            <ScrollView>
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

        )
    }
}

const styles = StyleSheet.create({
    cardTitle: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});


export default GetService