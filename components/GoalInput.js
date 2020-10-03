import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';


export default ({ addGoalHandler, isAddMode }) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => setEnteredGoal(enteredText)


    return (
        <Modal visible={isAddMode} animationType="slide">
            <View style={styles.childContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler.bind(this, enteredGoal)} />
            </View>
        </Modal>
        /*Calling .bind above (line 18) is another way of adding an argument to 
        addGoalHandler function without using an anonymous function */
    )
}


const styles = StyleSheet.create({
    childContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    }
})