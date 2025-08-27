import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import useUser from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Home = () => {

    const {navigate} = useUser()

  return (
    <ThemedView safe={true} style={styles.container}>
      <Text>Home</Text>
      
      <Spacer height={300}/>
 
      <View >
        <ThemedButton onPress={() => navigate.push("/diagnosis")}>
            <Text style={[{textAlign :"center"}, styles.text]}>Get Diagnosed</Text>
        </ThemedButton>
      </View>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center"
    },
    text : {
        color : "white"
    }




})