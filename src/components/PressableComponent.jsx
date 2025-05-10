import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableComponent = () => {
    const handlePress= ()=>{
        console.log('On Press.');
    }
  return (
    <View style={styles.container}>
      {/* <Text>PressableComponent</Text> */}

      <Pressable 
      style={styles.button}
    //   onPress={handlePress}
    //   onPressIn={handlePress}
    // onPressOut={handlePress}
    onLongPress={handlePress} // default 500 Milli second
    delayLongPress={400}
      >
        <Text style={styles.buttonText}>Push me...</Text>
      </Pressable>
    </View>
  )
}

export default PressableComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#007bff'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff'
    }
})