import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';

interface CardGroupProps {
    data: any;
}

const CardGroup = ({ data }: CardGroupProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card title={item.name} ruleTemplate={item.ruleTemplate} imageUrl={item.pictureUrl || require('../assets/images/00191-ev-temizligi_thumb_875x500.webp')} />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default CardGroup