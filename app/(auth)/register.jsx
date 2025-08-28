import { Keyboard, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedKeyArea from '../../components/ThemedKeyArea'

const Register = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedKeyArea safe={true} style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}   
>
      
      <Spacer />
            <ThemedText title={true} style={styles.text}>Create Account</ThemedText>
            <Spacer/>
            <ThemedText style={styles.text1}>Create an account to diagnose {"\n"} yourself of Diabetes</ThemedText>

        <Spacer height={50}/>

        

      <ThemedTextInput placeholder="First Name" style={styles.input}/>
      <Spacer height={30}/>
      <ThemedTextInput placeholder="Last Name" style={styles.input}/>
      <Spacer height={30}/>
      <ThemedTextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
      <Spacer height={30}/>
      <ThemedTextInput secureTextEntry style={styles.input} placeholder="Password"/>
      <Spacer height={30}/>
     
       <ThemedButton style={{width: "83%"}}>
        <Text style={{color : "#fff", textAlign : "center", fontFamily : "Poppins-Regular"}}>Sign up</Text>
       </ThemedButton>

       <Spacer />
       <Link href={'/login'} style={{fontFamily : "Poppins-Regular"}}>Already have an account? Sign in</Link>
    </ThemedKeyArea>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "stretch",
    },
    text: {
        textAlign : "center",
        fontSize : 30
    },
    text1:{
        textAlign : "center",
        fontSize : 20
    },
    input : {
        width : "83%"
    }

})