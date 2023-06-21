import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';


export default function Inicio(props){

  return(
 <View style={estilo.container}>
<ScrollView>
 
 <Text style={estilo.titulo} >Filmes Em Alta </Text>

    
 <TouchableOpacity onPress={()=>{props.navigation.navigate('HomemAranha')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/HomemAranha.png')}/>
     </TouchableOpacity>

    

    
    <TouchableOpacity onPress={()=>{props.navigation.navigate('PequenaSereia')}}>
      <Image style={estilo.itens1}
    source={require('../../assets/PequenaSereia.png')}/>
    </TouchableOpacity>


<Text style={estilo.titulo1} >Series Em Alta </Text>


<TouchableOpacity onPress={()=>{props.navigation.navigate('EuNunca')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/EuNunca.png')}/>
    </TouchableOpacity>


<TouchableOpacity onPress={()=>{props.navigation.navigate('Xokitty')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/XoKitty.png')}/>
    </TouchableOpacity>
   

     </ScrollView>
     </View>
     
  );
}



const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4F5'
  }
  
})