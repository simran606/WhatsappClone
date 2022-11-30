import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpenChat from './openChat';

const Stack = createStackNavigator();

export default function MenuScreens() {
  return (
    <NavigationContainer >
       <Stack.Navigator screenOptions={{ headerShown: false}} >
         <Stack.Screen name="NewGroup" component={NewGroup} />
         <Stack.Screen name="NewBroadcast" component={NewBroadcast} />
         <Stack.Screen name="WhatsappWeb" component={WhatsappWeb} />
         <Stack.Screen name="StarredMessages" component={StarredMessages} />
         <Stack.Screen name="Payments" component={Payments} />
         <Stack.Screen name="Settings" component={Settings} />
         <Stack.Screen name="OpenChat" component={OpenChat} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}