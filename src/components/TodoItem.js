import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem({ todo, toggleTodo, finishTodo, deleteTodo }) {
  return (
    <View style={styles.todoItem}>
      <View style={styles.row}>
        <Text style={[styles.todoTitle, todo.finished && styles.finishedText]}>
          {todo.title}
        </Text>

        <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
          <Text style={styles.caret}>{todo.expanded ? "▲" : "▼"}</Text>
        </TouchableOpacity>
      </View>

      {todo.expanded && (
        <View style={styles.expandedArea}>
          <Text style={styles.description}>{todo.description}</Text>

          <View style={styles.controlPanel}>
            {!todo.finished && (
              <TouchableOpacity onPress={() => finishTodo(todo.id)}>
                <Text style={styles.finishIcon}>✅</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
              <Text style={styles.deleteIcon}>🗑️</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 18,
    backgroundColor: "#f2f2f2",
    marginBottom: 14,
    borderRadius: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  finishedText: {
    textDecorationLine: "line-through",
    color: "#777777",
  },
  caret: {
    fontSize: 20,
    fontWeight: "bold",
  },
  expandedArea: {
    marginTop: 12,
  },
  description: {
    fontSize: 15,
    marginBottom: 12,
  },
  controlPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  finishIcon: {
    fontSize: 24,
    color: "green",
  },
  deleteIcon: {
    fontSize: 24,
    color: "red",
  },
});