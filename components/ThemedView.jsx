import { Appearance, StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false, ...prop}) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    

    if(!safe){
        return (
     <View style={[{backgroundColor : theme.background}, styles.container, style]} {...prop} />
        )
    }

    const inset = useSafeAreaInsets()

 if(safe){
  return (
    <View style={[{backgroundColor : theme.background, paddingTop : inset.top, paddingBottom: inset.bottom}, styles.container, style]} {...prop} />

  )
 }
  
}

export default ThemedView

const styles = StyleSheet.create({
    container : {
        fontFamily : "Poppins-Regular"
    }
})