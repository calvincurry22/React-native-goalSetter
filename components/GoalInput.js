import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


export default ({ courseGoals, setCourseGoals }) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => setEnteredGoal(enteredText)
    const addGoalHandler = () => {
        setCourseGoals([...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
    }

    return (
        <View style={styles.childContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>
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