import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false)
    const toggoleLoader =()=>{
        setLoading(!loading)
    }
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={toggoleLoader}>
        <Text style={styles.buttonText}>{loading ? 'Hide Loader' : 'Show Loader'}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        {
            loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size='large' color={"blue"}/>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            )
        }
      </TouchableOpacity>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight:600,
    },
    loaderContainer:{
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5 // only works on Android 
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#4CA50',
        fontWeight: 600,
    }
})