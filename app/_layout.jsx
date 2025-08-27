import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {

    const colorScheme = useColorScheme()
    const theme  =  Colors[colorScheme] ?? Colors.light

  return (
    <Drawer screenOptions={{
        headerStyle : {
            backgroundColor : theme.navBackground
        },
        drawerActiveTintColor : theme.iconColorFocused,
        drawerInactiveTintColor : theme.iconColor,
    }}>
      <Drawer.Screen name='(tabs)' options={{title : "" , drawerItemStyle : {height : 0}}} />
      <Drawer.Screen name='(auth)' options={{drawerItemStyle : {height: 0}}} />
      <Drawer.Screen name='profile' options={{title : "Profile", drawerIcon : ({focused}) => (
        <Ionicons size={24} name={focused ? "person" : "person-outline"} color={focused ? theme.iconColorFocused : theme.iconColor}/>
      )}}  />
    </Drawer>
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})