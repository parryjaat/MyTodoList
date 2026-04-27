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
    { id: "1", title: "Buy groceries" },
    { id: "2", title: "Go gym" },
    { id: "3", title: "Finish assignment" },
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
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Add Todo</Text>
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
    marginBottom: 25,
    textAlign: "center",
    color: "#111111",
  },
  list: {
    paddingBottom: 120,
  },
  todoItem: {
    padding: 18,
    backgroundColor: "#f2f2f2",
    marginBottom: 14,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  todoText: {
    fontSize: 16,
    color: "#222222",
  },
  button: {
    position: "absolute",
    bottom: 35,
    left: 20,
    right: 20,
    backgroundColor: "#1E90FF",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});