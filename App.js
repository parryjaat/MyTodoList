import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const todos = [
    { id: "1", title: "Help mum" },
    { id: "2", title: "Go gym" },
    { id: "3", title: "Finish assignment 1" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  todoItem: {
    backgroundColor: "#f2f2f2",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  todoText: {
    fontSize: 16,
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