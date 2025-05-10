/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const POST_API = () => {
    // const [formData, setFromData] = useState([]);
    const [formData, setFromData] = useState({id: '', name:'', email:''});
    const handleInput = (field, value)=>{
        setFromData({...formData, [field]: value})
    }
    const handleSubmit = async()=>{
        try {
            const res = await axios.post('http://10.0.2.2:3000/users', formData);
            Alert.alert('Success!', 'Data Submitted Successfully')
            setFromData({id: '', name:'', email:''})
        } catch (error) {
            Alert.alert('Error')
        }
    }
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 30 }}>POST_API</Text>
            <TextInput
                placeholder='Enter ID'
                value={formData.id}
                onChangeText={(typedValue)=> handleInput('id', typedValue)}
            />
            <TextInput
                placeholder='Enter Name'
                value={formData.name}
                onChangeText={(typedValue)=> handleInput('name', typedValue)}
            />
            <TextInput
                placeholder='Enter Email'
                value={formData.email}
                onChangeText={(typedValue)=> handleInput('email', typedValue)}
            />

            <Button title='Submit' onPress={handleSubmit}/>
        </View>
    );
};

export default POST_API;