import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import TodoItem from "../components/TodoItem";

export default function HomeScreen({
  navigation,
  todos,
  toggleTodo,
  finishTodo,
  deleteTodo,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            toggleTodo={toggleTodo}
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
          />
        )}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add New Todo")}
      >
        <Text style={styles.addButtonText}>＋ Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  list: {
    paddingBottom: 120,
  },
  addButton: {
    position: "absolute",
    bottom: 35,
    left: 20,
    right: 20,
    backgroundColor: "#1E90FF",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});