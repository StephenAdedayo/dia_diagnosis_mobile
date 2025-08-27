import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'

const Diagnosis = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Text>Diagnosis</Text>
    </ThemedView>
  )
}

export default Diagnosis

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center"
    }
})