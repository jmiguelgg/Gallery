// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Albums from './Albums';
import Photos from './Photos';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
