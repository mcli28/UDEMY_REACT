import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = () => {
  const data = [
    {id:1, name:"mukes", position:"web dev"},
    {id:2, name:"suresh", position:"Android dev"},
    {id:3, name:"ramesh", position:"ML expert"},
    {id:4, name:"hitesh", position:"web dev"},
    {id:5, name:"hitesh", position:"web dev"},
    {id:6, name:"hitesh", position:"web dev"},
    {id:7, name:"hitesh", position:"web dev"},
    {id:8, name:"hitesh", position:"web dev"},
  ]
  //const renderList = data.map((item) => {
  const renderList = ((item) => {
    return (
      <Card style={styles.mycard} key={item.id}>
        <View style={styles.cardView}>
          <Image style={{width: 50, height: 50, borderRadius: 20}}
            source={{uri:"https://www.pexels.com/es-es/foto/foto-de-una-computadora-portatil-y-una-tableta-sobre-la-mesa-2528118/"}}/>
          <View style={{marginLeft:10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    )
  })
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={({item}) => {
          return renderList(item)
        }}
        keyExtractor={item=>`${item.id}`}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        theme={{ colors: { primary: 'blue' } }} 
      />
    </View>

    
  )
}

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    padding: 5,
    width: 300,
    height: 100
  },
  cardView: {
    flexDirection: "row"
  },
  text: {
    fontSize:18,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }

});

export default Home