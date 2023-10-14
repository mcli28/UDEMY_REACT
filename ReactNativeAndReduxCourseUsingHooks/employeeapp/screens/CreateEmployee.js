import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


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
      <Button 
        style={styles.inputStyle}
        theme={theme}
        icon="upload" 
        mode="contained" 
        onPress={()=> setModal(true)}>
        Press me
      </Button>
      <Button 
        style={styles.inputStyle}
        theme={theme}
        icon="content-save" 
        mode="contained" 
        onPress={()=> console.log("saved")}>
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={()=>{
          setModal(false)
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button 
              icon="camera" 
              theme={theme} 
              mode="contained" 
              onPress={()=> console.log("press camera")}>Camera
            </Button>
            <Button 
              icon="folder-image" 
              theme={theme}
              mode="contained"
              onPress={()=> console.log("press gallery")}>Gallery
            </Button>
            </View>
          <Button 
            theme={theme}
            onPress={()=> setModal(false)}
            >Cancel
          </Button>
        </View>
      </Modal>
    </View>
  )
}

const theme = {
  colors: {
    primary: "#006aff"
  }
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },  
    inputStyle: {
      margin: 5
    },
    modalView:{
      position:"absolute",
      bottom: 2,
      width:"100%",
      backgroundColor:"white"
    },
    modalButtonView:{
      flexDirection:"row",
      justifyContent: "space-around",
      padding:10
    }
  });

export default CreateEmployee