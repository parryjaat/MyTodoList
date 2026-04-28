import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ todo, onPress, onComplete, onDelete }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.topRow} onPress={onPress}>
        <Text style={[styles.todoTitle, todo.completed && styles.completedText]}>
          {todo.title}
        </Text>

        <Ionicons
          name={todo.expanded ? "chevron-up" : "chevron-down"}
          size={26}
          color="#111827"
        />
      </TouchableOpacity>

      {todo.expanded && (
        <View style={styles.expandedArea}>
          <Text style={styles.description}>{todo.description}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.doneButton} onPress={onComplete}>
              <Text style={styles.buttonText}>✓ Done</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
              <Text style={styles.buttonText}>🗑 Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 22,
    marginBottom: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  todoTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#6b7280",
  },

  expandedArea: {
    marginTop: 14,
  },

  description: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
    marginBottom: 14,
  },

  buttonRow: {
    flexDirection: "row",
  },

  doneButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: "#dc2626",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});