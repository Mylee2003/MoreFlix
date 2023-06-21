import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView,  TouchableOpacity} from 'react-native';

export default function Series(props){

  return(
  <ScrollView>
   <View style={estilo.container}>

      <View style={estilo.colunas}>

  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Alice')}}>
    <Text style={estilo.subtitulo1}> Alice  </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/Alice.png')}/>
  
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('EuNunca')}}>
   <Text style={estilo.subtitulo1}> Eu Nunca   </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/EuNunca.png')}/>

  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Wandinha')}}>
   <Text style={estilo.subtitulo1}> Wandinha   </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/Wandinha.png')}/>
  
      
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Xokitty')}}>
    <Text style={estilo.subtitulo1}> Xokitty </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/XoKitty.png')}/>
  
  </View>
  </View>
   </ScrollView>
 
   
  );
}


const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2B2B2B',
     flexDirection: 'row',
 justifyContent: 'space-evenly',
 flexWrap:'wrap'
    
},
itens:{
 paddingVertical: 10,
  textAlign: 'left',
  
  marginTop: 10,
  marginBottom: 2,
  marginLeft: 15,
  marginRight: 15,
  paddingLeft: 15,
  paddingRight: 15,
  width: 200,
  height: 300
},
subtitulo1: {
     margin: 70,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
      marginLeft: 15,
  marginRight: 15,
  
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: 5,
    borderRadius:15,
    width: 120
  
},
})