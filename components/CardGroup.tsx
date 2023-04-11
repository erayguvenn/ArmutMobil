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
                    <Card title={item.title} imageUrl={item.imageUrl}/>
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