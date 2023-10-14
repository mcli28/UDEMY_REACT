import React from 'react'
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title, Card, Button} from 'react-native-paper'
import {Ionicons, MaterialIcons, Entypo} from '@expo/vector-icons'
const Profile = () => {

  const openDial = () => {
    if(Platform.OS === "android"){
      Linking.openURL("tel:13245")
    } else {
      Linking.openURL("telpromp:12345")
    }
  }

  return (
    <View style={styles.root}>
        <LinearGradient 
            colors={["#0033ff", "#6bc1ff"]}
            style={{height:"20%"}}/>
      <View style={{alignItems:"center"}}>
        <Image 
          style={{width:100, height:100, borderRadius:140/2, marginTop: -50}}
          source={{uri:"https://media.istockphoto.com/id/901594610/es/foto/gato-malo-robaron-bitcoins.jpg?s=1024x1024&w=is&k=20&c=TsBX4KSARfSXjNsaieyNh4oukdyJd4b9T5NyUyPkdAg="}}/>
      </View>
      <View style={{alignItems:"center", margin:15}}>
        <Title>Xavier mancilla</Title>
        <Text style={{fontSize:15}}>Web developer</Text>
      </View>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name='email' size={32} color="#006aff" onPress={()=>{
            Linking.openURL("mailto:some@example.com")
          }}/>
          <Text style={styles.mytext}>xavierdev@gmail.com</Text>
        </View>
      </Card>
      <Card style={styles.mycard} onPress={()=>openDial()}>
        <View style={styles.cardContent}>
          <Entypo name='phone' size={32} color="#006aff"/>
          <Text style={styles.mytext}>56786567</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name='attach-money' size={32} color="#006aff"/>
          <Text style={styles.mytext}>8 LPA</Text>
        </View>
      </Card>
      <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
        <Button 
          icon="account-edit" 
          mode="contained"
          theme={theme} 
          onPress={() => console.log('Pressed')}>
          Edit
        </Button>
        <Button 
          icon="delete" 
          mode="contained"
          theme={theme} 
          onPress={() => console.log('Pressed')}>
          Fire employee
        </Button>
      </View>
    </View>
  )
}

const theme = {
  colors: {
    primary: "#006aff"
  }
}

const styles = StyleSheet.create({
    root:{
        flex: 1
    },
    mycard:{
      margin:3
    },
    cardContent:{
      flexDirection:"row",
      padding:8
    },
    mytext:{
      fontSize:18,
      marginTop:3,
      marginLeft:3
    }
})

export default Profile