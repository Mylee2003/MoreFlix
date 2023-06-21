import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView,  TouchableOpacity} from 'react-native';

export default function Filmes(props){

  return(
  <ScrollView>
   <View style={estilo.container}>

      <View style={estilo.colunas}>

  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Barbie')}}>
    <Text style={estilo.subtitulo1}> Barbie: O Filme  </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/Barbie.png')}/>
  
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Close')}}>
   <Text style={estilo.subtitulo1}> Close </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/Close.png')}/>

  <TouchableOpacity  onPress={()=>{props.navigation.navigate('HomemAranha')}}>
   <Text style={estilo.subtitulo1}> Homem-Aranha No Aranhaverso 2  </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/HomemAranha.png')}/>
  
      
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Pequena Sereia ')}}>
    <Text style={estilo.subtitulo1}> Pequena Sereia  </Text>
  </TouchableOpacity>
    <Image style={estilo.itens}
    source={require('../../assets/PequenaSereia.png')}/>
  
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
  
    backgroundColor: '#9EE8FF',
    color: '#000000',
    padding: 5,
    borderRadius:15,
    width: 120
  
},
})