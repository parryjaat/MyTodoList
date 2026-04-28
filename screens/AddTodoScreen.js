import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function AddTodoScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function saveTodo() {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please enter both title and description.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      expanded: false,
      completed: false,
    };

    route.params.addTodo(newTodo);

    Alert.alert("Success", "New todo item added.");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.descriptionInput}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveTodo}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 28,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
  },

  descriptionInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    height: 150,
    textAlignVertical: "top",
    marginBottom: 16,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 28,
  },

  cancelButton: {
    flex: 1,
    backgroundColor: "#9ca3af",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginRight: 6,
  },

  saveButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginLeft: 6,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});