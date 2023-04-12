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

const temizlik = [
    {
        id: '1',
        title: 'Ev Temizliği',
        imageUrl: require('../assets/images/00191-ev-temizligi_thumb_875x500.webp'),
    },
    {
        id: '2',
        title: 'Boş Ev Temizliği',
        imageUrl: require('../assets/images/00669-bos-ev-temizligi.webp'),
    },
    {
        id: '3',
        title: 'Koltuk Yıkama',
        imageUrl: require('../assets/images/00727-koltuk-yikama-temizleme.webp'),
    },
];
const nakliyat = [
    {
        id: '1',
        title: 'Evden Eve Nakliyat',
        imageUrl: require('../assets/images/00142-evden-eve-nakliyat.webp'),
    },
    {
        id: '2',
        title: 'Şehirler Arası Nakliye',
        imageUrl: require('../assets/images/00501-sehirler-arası-esya-tasima.webp'),
    },
    {
        id: '3',
        title: 'Eşya Taşıma',
        imageUrl: require('../assets/images/03579-parca-esya-tasima.webp'),
    },
];
const tadilat = [
    {
        id: '1',
        title: 'Boya Badana',
        imageUrl: require('../assets/images/00032-boyaci-boya-badana-ustasi.webp'),
    },
    {
        id: '2',
        title: 'Ev Tadilat',
        imageUrl: require('../assets/images/02045-ev-tadilat.webp'),
    },
    {
        id: '3',
        title: 'Mutfak Dolabı Yapımı',
        imageUrl: require('../assets/images/00111-mutfak-dolabi-yapimi.webp'),
    },
];
const ozelDers = [
    {
        id: '1',
        title: 'Direksiyon Dersi',
        imageUrl: require('../assets/images/00274-direksiyon-ozel-ders.webp'),
    },
    {
        id: '2',
        title: 'Online İngilizce Dersi',
        imageUrl: require('../assets/images/37839-online-ingilizce-ozel-ders.webp'),
    },
    {
        id: '3',
        title: 'Yüzme Dersi',
        imageUrl: require('../assets/images/00275-yuzme-ozel-ders.webp'),
    },
];
const saglik = [
    {
        id: '1',
        title: 'Psikolog',
        imageUrl: require('../assets/images/00156-psikolog.webp'),
    },
    {
        id: '2',
        title: 'Online Diyetisyen',
        imageUrl: require('../assets/images/00692-online-diyetisyen.webp'),
    },
    {
        id: '3',
        title: 'Personal Trainer',
        imageUrl: require('../assets/images/00115-kisisel-antrenor-personal-trainer.webp'),
    },
];
const tamir = [
    {
        id: '1',
        title: 'Petek Temizliği',
        imageUrl: require('../assets/images/02555-radyator-petek-temizligi.webp'),
    },
    {
        id: '2',
        title: 'Mobilya Montaj',
        imageUrl: require('../assets/images/00222-mobilya-montaj.webp'),
    },
    {
        id: '3',
        title: 'Kombi Tamiri',
        imageUrl: require('../assets/images/00459-kombi-tamiri.webp'),
    },
];


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