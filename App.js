import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./src/screens/HomeScreen";
import AddTodoScreen from "./src/screens/AddTodoScreen";

const Stack = createNativeStackNavigator();
const STORAGE_KEY = "MY_TODO_LIST";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loaded]);

  const loadTodos = async () => {
    const savedTodos = await AsyncStorage.getItem(STORAGE_KEY);

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos([
        {
          id: "1",
          title: "Help mum",
          description: "Help mum with house work.",
          finished: false,
          expanded: false,
        },
        {
          id: "2",
          title: "Go gym",
          description: "Complete workout session.",
          finished: false,
          expanded: false,
        },
      ]);
    }

    setLoaded(true);
  };

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      finished: false,
      expanded: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, expanded: !todo.expanded } : todo
      )
    );
  };

  const finishTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, finished: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              todos={todos}
              toggleTodo={toggleTodo}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Add New Todo">
          {(props) => <AddTodoScreen {...props} addTodo={addTodo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}