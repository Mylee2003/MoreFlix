import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './Inicio';
import EuNunca from '../Inicio/EuNunca';
import HomemAranha from '../Inicio/HomemAranha';
import PequenaSereia from '../Inicio/PequenaSereia';
import Xokitty from '../Inicio/Xokitty';



const Stack = createStackNavigator();

export default function RotasInicio(){

  return(
    <Stack.Navigator>

    <Stack.Screen name="Início" component={Inicio}/>
    <Stack.Screen name="Alice" component={Alice}/>
    <Stack.Screen name="Barbie" component={Barbie}/>
    <Stack.Screen name="Close" component={Close}/>
    <Stack.Screen name="EuNunca" component={EuNunca}/>
    <Stack.Screen name="HomemAranha" component={HomemAranha}/>
    <Stack.Screen name="PequenaSereia" component={PequenaSereia}/>
    <Stack.Screen name="Wandinha" component={Wandinha}/>
    <Stack.Screen name="Xokitty" component={Xokitty}/>
    </Stack.Navigator>
  );
}