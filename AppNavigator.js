import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PeopleScreen from "./screens/PeopleScreen";
import AddPersonScreen from "./screens/AddPersonScreen";

const Stack = createStackNavigator();

export default function AppNavigator({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="People"
          component={PeopleScreen}
          options={({ navigation }) => ({
            title: "People",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("AddPerson")}
                title="Add People"
                color="#3d5e9e"
              />
            ),
          })}
        />
        <Stack.Screen name="AddPerson" component={AddPersonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})
