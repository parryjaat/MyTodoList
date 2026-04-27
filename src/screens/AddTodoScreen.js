import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function AddTodoScreen({ navigation, addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Todo Title or Description can't be empty.");
      return;
    }

    addTodo(title.trim(), description.trim());
    Alert.alert("Success", "Todo Added Successfully.");

    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.descriptionInput}
        placeholder="Enter todo description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>⬅ Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveTodo}>
          <Text style={styles.buttonText}>💾 Save</Text>
        </TouchableOpacity>
      </View>
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
    fontSize: 16,
  },
  descriptionInput: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
    fontSize: 16,
    height: 140,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  backButton: {
    flex: 1,
    padding: 15,
    backgroundColor: "#777777",
    borderRadius: 12,
    marginRight: 6,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 12,
    marginLeft: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});