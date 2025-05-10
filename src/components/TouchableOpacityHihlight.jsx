import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const TouchableOpacityHihlight = () => {
  return (
    <View>
        <Text style={{fontSize: 20, marginTop:30, textAlign:'center', fontWeight:'bold' }}>TouchableOpacityHihlight</Text>
        <Button title='Basic Button' color={'red'}/>

        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Text style={styles.buttonText}>Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.button} onPress={() => console.log('Hello')} underlayColor={'yellow'}>
            <Text style={styles.buttonText}>Touchable Highlight </Text>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        margin: 20,
        backgroundColor: '#4E31AA',
        padding: 20,
        borderRadius: 25,
        elevation: 5
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default TouchableOpacityHihlight