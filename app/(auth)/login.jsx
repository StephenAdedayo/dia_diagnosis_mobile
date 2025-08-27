import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>Login</Text>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }

})