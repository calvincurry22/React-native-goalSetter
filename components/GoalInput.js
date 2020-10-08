import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';


export default ({ addGoalHandler, isAddMode, toggleModal }) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => setEnteredGoal(enteredText)

    const addGoal = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoal = () => {
        toggleModal();
        setEnteredGoal('')
    }

    return (
        <Modal visible={isAddMode} animationType="slide">
            <View style={styles.childContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={cancelGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoal} />
                    </View>
                </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '60%'
    },
    button: {
        width: '40%'
    }
})