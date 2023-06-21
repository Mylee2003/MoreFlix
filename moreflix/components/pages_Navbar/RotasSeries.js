import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Series from './Series';
import Alice from '../Series/Alice';
import EuNunca from '../Series/EuNunca';
import Wandinha from '../Series/Wandinha';
import Xokitty from '../Series/Xokitty';



const Stack = createStackNavigator();

export default function RotasInicio(){

  return(
    <Stack.Navigator>

    <Stack.Screen name="Series" component={Series}/>
    <Stack.Screen name="Alice" component={Alice}/>
    <Stack.Screen name="EuNunca" component={EuNunca}/>
    <Stack.Screen name="Wandinha" component={Wandinha}/>
    <Stack.Screen name="Xokitty" component={Xokitty}/>
    </Stack.Navigator>
  );
}