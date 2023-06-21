import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Filmes from './Filmes';
import Barbie from '../Filmes/Barbie';
import Close from '../Filmes/Close';
import HomemAranha from '../Filmes/HomemAranha';
import PequenaSereia from '../Filmes/PequenaSereia';




const Stack = createStackNavigator();

export default function RotasInicio(){

  return(
    <Stack.Navigator>

    <Stack.Screen name="Filmes" component={Filmes}/>
    <Stack.Screen name="Barbie" component={Barbie}/>
    <Stack.Screen name="Close" component={Close}/>
    <Stack.Screen name="HomemAranha" component={HomemAranha}/>
    <Stack.Screen name="PequenaSereia" component={PequenaSereia}/>
  
    </Stack.Navigator>
  );
}