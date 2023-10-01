import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';


const CreateEmployee = () => {
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [salary,setSalary] = useState('')
  const [picture,setPicture] = useState('')
  const [modal,setModal] = useState(false)
  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        style={styles.inputStyle}
        theme={theme}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Email"
        style={styles.inputStyle}
        theme={theme}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Phone"
        style={styles.inputStyle}
        theme={theme}
        keyboardType='number-pad'
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        label="Salary"
        style={styles.inputStyle}
        theme={theme}
        value={salary}
        onChangeText={text => setSalary(text)}
      />
    </View>
  )
}

const theme = {
  colors: {
    primary: "blue"
  }
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },  
    inputStyle: {
      margin: 5
    },
  });

export default CreateEmployee