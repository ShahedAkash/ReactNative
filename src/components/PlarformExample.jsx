import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const PlarformExample = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>PlarformExample</Text>

      {/* shortcut porpus */}
      <Text style={styles.welcomeText}>{Platform.OS === 'iso' ? 'Welcome ISO user' : 'Welcome Android user'}</Text>

      {/* Long popus */}
      <Text style={styles.platformText}>
        {
            Platform.select({
                ios: 'You are using IOS Deice.',
                android: 'You are using Android Deice.',
                macos: 'You are using MacOS Deice.'
            })
        }
      </Text>
    </View>
  )
}

export default PlarformExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    welcomeText:{
        fontSize: 24,
        color: Platform.OS === 'iso' ? 'blue' : 'green',
        marginBottom: 20,
    },
    platformText:{
        fontSize: 18,
        color: '#000'
    }
})