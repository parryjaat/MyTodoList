import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodoItem({ todo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
  },
});