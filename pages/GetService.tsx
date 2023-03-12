import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardGroup from '../components/CardGroup';

const data = [
    {
        id: '1',
        title: 'Card 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        title: 'Card 2',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '3',
        title: 'Card 3',
        content: 'Ut enim ad minim veniam, quis nostrud  ex ea commodo consequat.',
    },
];
export class GetService extends Component {
    render() {
        return (
            <>
                <View style={{ flex: 1, marginTop: 25, marginRight: 10 }}>
                    <Text style={styles.cardTitle}>Temizlik</Text>
                    <CardGroup data={data} />
                </View>

            </>
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