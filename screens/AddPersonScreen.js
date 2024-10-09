import React, { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PeopleContext from "../PeopleContext";
import { useNavigation } from "@react-navigation/native";

export default function AddPersonScreen() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const { addPerson } = useContext(PeopleContext);
  const navigation = useNavigation();

  const savePerson = () => {
    if (name && dob) {
      addPerson(name, dob);
      navigation.goBack();
    }
  };
  return (
    <View>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="2003-01-03" value={dob} onChangeText={setDob} />

      <Button title="Save" color={"#5885e1"} onPress={savePerson}/>
      <Button title="Cancel" color={"#8b1a10"} onPress={() => navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})