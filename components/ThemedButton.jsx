import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedButton = ({style, ...prop}) => {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed, style]} {...prop}/>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button : {
        backgroundColor : Colors.primary,
        paddingVertical : 10,
        paddingHorizontal : 15,
        borderRadius : 1
    },

    pressed : {
        opacity : 0.8
    }
})