import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigation from './Tab'
import DetailsScreen from '@/pages/Detail'
import LoginScreen from '@/pages/Login'

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
