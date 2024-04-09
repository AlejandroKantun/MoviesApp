import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterfaces';
import { HomeScreen } from '../screens/HomeScreen';
import { FadeScreen } from '../screens/FadeScreen';

//Arguments for navigation
export type RootStackParams={
  HomeScreen: undefined,
  DetailScreen:Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator=() =>{
  return (
    <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
                cardStyle:{
                    //backgroundColor:'white'
                }
            })}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}