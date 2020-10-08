import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const toggleModal = () => {
    setIsAddMode(!isAddMode)
  }
  const addGoalHandler = (goalString) => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalString }]);
    toggleModal();
  }
  const deleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  //Left off at 2:58:12
  /* Use FlatList for better performance when displaying large lists of data
  vs ScrollView and mapping through an array */
  return (
    // <ScrollView>
    <View style={styles.mainContainer}>
      <Button title="Add New Goal" onPress={toggleModal} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        isAddMode={isAddMode}
        toggleModal={toggleModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            itemData={itemData}
            deleteGoal={deleteGoal}
          />)}
      />
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50
  }
});
