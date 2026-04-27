import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TodoList from "../components/TodoList";

export default function HomeScreen({ navigation, todos }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Tasks</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoList todo={item} />}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTodo")}
      >
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  list: {
    paddingBottom: 100,
  },
  addButton: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});