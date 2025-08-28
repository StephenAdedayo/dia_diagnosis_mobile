import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name='login' options={{title : ""}}/>
        <Stack.Screen name='register' options={{title : ""}}/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})