import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Inicio from './Inicio';
import RotasFilmes from './RotasFilmes';
import RotasSeries from './RotasSeries';



const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return (
    <Tab.Navigator initialRoutName="Inicio" screenOptions={{headerShown:false}}>
      <Tab.Screen name='Inicio' component={Inicio}
      options={{tabBarIcon:({color, size})=>
     <FontAwesome name="home" size={size} color={color} /> }} 
      />

       <Tab.Screen name='Filmes' component={RotasFilmes}
      options={{tabBarIcon:({color, size})=>

       <MaterialIcons name="local-movies" size={size} color={color} /> }} 
      />
      

       <Tab.Screen name='Series' component={RotasSeries}
      options={{tabBarIcon:({color, size})=>
  <FontAwesome5 name="film" size={size} color={color} /> }}
      />

      
      </Tab.Navigator>
      
  )
}