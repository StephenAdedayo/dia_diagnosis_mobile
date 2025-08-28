import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import useUser from '../hooks/useUser';
import { StatusBar } from 'expo-status-bar';
import UserContextProvider from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';


const DrawerLayout = () => {

    const colorScheme = useColorScheme()
    const theme  =  Colors[colorScheme] ?? Colors.light

    const navigation = useNavigation()

    
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) return null; // wait for font to load


  return (
    <UserContextProvider>
        <GestureHandlerRootView>
      <StatusBar value="auto"/>
    <Drawer screenOptions={{
        headerStyle : {
            backgroundColor : theme.background
        },
        drawerActiveTintColor : theme.iconColorFocused,
        drawerInactiveTintColor : theme.iconColor,
        headerRight : () => (
            <Ionicons size={20} name='menu' style={{paddingRight: 9}} />
        )
    }}>
      <Drawer.Screen name='(tabs)' options={{title : "",  drawerItemStyle : {height : 0}}} />
      <Drawer.Screen name='(auth)' options={{title: "", headerShown : false,  drawerItemStyle : {height: 0}}} />
      <Drawer.Screen name='profile' options={{title : "Profile", drawerIcon : ({focused}) => (
        <Ionicons size={24} name={focused ? "person" : "person-outline"} color={focused ? theme.iconColorFocused : theme.iconColor}/>
      )}}  />
    </Drawer>
    </GestureHandlerRootView>
    </UserContextProvider>
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})