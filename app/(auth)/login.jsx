import { Keyboard, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedKeyArea from '../../components/ThemedKeyArea'

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedKeyArea safe={true} style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}   
>
      
      <Spacer />
            <ThemedText title={true} style={styles.text}>Login here</ThemedText>
            <Spacer/>
            <ThemedText style={styles.text1}>Welcome back you’ve {"\n"}
                 been missed!</ThemedText>

        <Spacer height={50}/>

        

      
      <ThemedTextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
      <Spacer height={30}/>
      <ThemedTextInput secureTextEntry style={styles.input} placeholder="Password"/>
      <Spacer height={30}/>
      <View style={{ width: "83%"}}>
      <Link href={'/'} ><ThemedText style={{textAlign : "right", fontFamily : "Poppins-Regular"}}>Forgot your password?</ThemedText></Link>
       </View>

       <Spacer height={30}/>

       <ThemedButton style={{width: "83%"}}>
        <Text style={{color : "#fff", textAlign : "center", fontFamily : "Poppins-Regular"}}>Sign in</Text>
       </ThemedButton>

       <Spacer />
       <Link href={'/register'} style={{fontFamily : "Poppins-Regular"}}>Create new account</Link>
    </ThemedKeyArea>
    </TouchableWithoutFeedback>
  )
}

export default Login

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