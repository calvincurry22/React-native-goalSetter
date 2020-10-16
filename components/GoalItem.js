import React from 'react';
import { ImagePropTypes, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

export default ({ itemData, deleteGoal }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={deleteGoal.bind(this, itemData.item.id)}>
            <View style={styles.listItem}>
                <Text>Goal: {itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
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