import React from 'react';
import { ImagePropTypes, StyleSheet, Text, View } from 'react-native';

export default ({ itemData }) => {
    return (
        <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    }
})