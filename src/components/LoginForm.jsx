import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handelLogin = () =>{
      console.log('Email: ', email);
      console.log('Password: ', password);

      setEmail('');
      setPassword('');
    };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Email'
        value={email}
        onChange={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#999'
      />

      <TextInput 
        style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='#999'
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handelLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  textInput:{
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333'
  },
  loginButton:{
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default LoginForm