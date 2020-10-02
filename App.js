import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText)
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }
  //Left off at 2:21:00
  /* Use FlatList for better performance when displaying large lists of data
  vs ScrollView and mapping through an array */
  return (
    // <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.childContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} />

    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50
  },
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
  },
  listItem: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});
