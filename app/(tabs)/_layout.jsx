import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import UserContextProvider from '../../context/UserContext'

const RootLayout = () => {

    const colorScheme = useColorScheme()

    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar value="auto"/>
    <Tabs screenOptions={{
        headerShown : false,
        tabBarStyle : {
            backgroundColor : theme.navBackground,
            padding : 15,
            height : 70
        },
        tabBarActiveTintColor : theme.iconColorFocused,
        tabBarInactiveTintColor : theme.iconColor
    }}>
        <Tabs.Screen name='home' options={{title : "Home", tabBarIcon : ({focused}) => (
            <Ionicons size={24} name={focused ? "home" : "home-outline"} color={focused ? theme.iconColorFocused : theme.iconColor}/>
        )}}/>
        <Tabs.Screen name='diagnosis' options={{title : "Diagnosis", tabBarIcon : ({focused}) => (
            <Ionicons size={24} name={focused ? "medkit" : "medkit-outline"} color={focused ? theme.iconColorFocused : theme.iconColor}/>
        )}}/>
    </Tabs>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})