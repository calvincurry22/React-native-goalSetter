import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const addGoalHandler = (goalString) => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalString }]);
  }
  //Left off at 2:32:00
  /* Use FlatList for better performance when displaying large lists of data
  vs ScrollView and mapping through an array */
  return (
    // <ScrollView>
    <View style={styles.mainContainer}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem itemData={itemData} />}
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
