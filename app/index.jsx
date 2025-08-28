import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView'
import welcome from "../assets/welcome.png"
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import useUser from '../hooks/useUser'

const Index = () => {

  const {navigate} = useUser()

  return (
    <ThemedView style={styles.container} safe={true}>
      <Image resizeMode='contain' style={styles.image}  source={welcome} />
      <Spacer />

      <ThemedText style={[{textAlign : "center" }, styles.text]}>Discover Your {'\n'} Diabetes Risk Today</ThemedText>
          <Spacer />
      <ThemedText style={[{textAlign : "center"}, styles.text1]}>Explore your health insights and {"\n"} diabetes risk factors</ThemedText>
      <Spacer height={60}/>

      <View style={styles.flexContainer}>
        <ThemedButton style={styles.btn} onPress={() => navigate.push("/login")}><ThemedText style={styles.btntext}>Login</ThemedText></ThemedButton>
        <ThemedButton style={styles.btn} onPress={() => navigate.push("/register")}><ThemedText style={styles.btntext}>Register</ThemedText></ThemedButton>
      </View>
    </ThemedView>
  )
}

export default Index

const styles = StyleSheet.create({
  container : {
  flex : 1,
  alignItems : "center",
  justifyContent : "stretch"
  },
  image : {
    width : "90%",
    height : 370
  },
  text:{
    fontSize : 25
  },
  text1 : {
    fontSize : 15
  },
  flexContainer : {
    flexDirection : "row",
    gap : 20
  },
  btn : {
    width : 150,
    paddingVertical : 20,
    paddingHorizontal : 20,
  },
  btn2:{
    width : 150,
    paddingVertical : 20,
    paddingHorizontal : 20,
    backgroundColor: ""
  },
  btntext: {
        color: "#fff",
        textAlign : "center"
  }
})