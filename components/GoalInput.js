import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


export default ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => setEnteredGoal(enteredText)


    return (
        <View style={styles.childContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler.bind(this, enteredGoal)} />
        </View>
        /*Calling .bind above (line 18) is another way of adding an argument to 
        addGoalHandler function without using an anonymous function */
    )
}


const styles = StyleSheet.create({
    childContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    }
})