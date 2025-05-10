import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const DELETE_API = () => {
    const [id, setId] = useState();

    const handleDelete = async ()=>{
        try {
            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            Alert.alert('Success!', 'Data Deleted')
            setId('');
        } catch (error) {
            Alert.alert('Error.')
        }
    }
  return (
    <View>
      <Text style={{fontSize:24, margin:30, textAlign:'center'}}>DELETE_API</Text>

      <TextInput 
        placeholder='Enter ID'
        value={id}
        onChangeText={(value)=> setId(value)}
      />

      <Button title='Delete' onPress={handleDelete} />
    </View>
  )
}

export default DELETE_API