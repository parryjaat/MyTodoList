import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function AddTodoScreen({ navigation, addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please enter both title and description");
      return;
    }

    addTodo({
      title: title,
      description: description,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveTodo}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  descriptionInput: {
    height: 140,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: "auto",
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#2563eb",
    alignItems: "center",
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  saveText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});