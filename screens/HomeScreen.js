import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TodoItem from "../components/todoitems";

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Milestone 1",
      description: "Create a basic todo list screen.",
      expanded: false,
      completed: false,
    },
    {
      id: 2,
      title: "Milestone 2",
      description: "Add navigation and a new todo screen.",
      expanded: false,
      completed: false,
    },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, expanded: !todo.expanded } : todo
      )
    );
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <ScrollView style={styles.todoList} showsVerticalScrollIndicator={false}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onPress={() => toggleTodo(todo.id)}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTodo", { addTodo })}
      >
        <Ionicons name="add-circle-outline" size={25} color="white" />
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 24,
  },

  todoList: {
    flex: 1,
  },

  addButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 28,
  },

  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});