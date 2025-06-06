import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const PUT_API = () => {
    const [formData, setFormData] = useState({id:'', name:'', email:''})
    const handleInput= (field, value)=>{
        setFormData({...formData, [field]: value})
    }

    const handleUpdate = async ()=>{
        try {
            const res = await axios.put(`http://10.0.2.2:3000/users/${formData.id}`,{
                name: formData.name,
                email: formData.email
            })
            Alert.alert('Success!', 'Data Updated Successfully')
            setFormData({id: '', name:'', email:''})
        } catch (error) {
            Alert.alert('Error')
        }
    }
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 30 }}>PUT_API</Text>
            <TextInput
                placeholder='Enter ID'
                value={formData.id}
                onChangeText={(value)=> handleInput('id', value)}
            />
            <TextInput
                placeholder='Enter Name'
                value={formData.name}
                onChangeText={(value)=> handleInput('name', value)}
            />
            <TextInput
                placeholder='Enter Email'
                value={formData.eamil}
                onChangeText={(value)=> handleInput('email', value)}
            />
            <Button title='Update' onPress={handleUpdate}/>
        </View>
    )
}

export default PUT_API