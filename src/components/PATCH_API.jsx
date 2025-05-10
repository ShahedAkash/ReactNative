import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const PATCH_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' })

    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const handleUpdate = async () => {
        try {
            const dataToUpdate = {};
            if (formData.name) dataToUpdate.name = formData.name;
            if (formData.email) dataToUpdate.email = formData.email;

            const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, dataToUpdate)

            // const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`,
            //     { ...formData.name && { name: formData.name } },
            //     { ...formData.email && { email: formData.email } }
            // )
            Alert.alert('Data updated Successfully')
            setFormData({ id: '', name: '', email: '' })
        } catch (error) {
            Alert.alert('Error')
        }
    }
    return (
        <View>
            <Text style={{ fontSize: 20, margin: 40, textAlign: 'center' }}>PATCH_API</Text>

            <TextInput
                placeholder='Enter ID'
                value={formData.id}
                onChangeText={(value) => handleInput('id', value)}
            />
            <TextInput
                placeholder='Enter Name'
                value={formData.name}
                onChangeText={(value) => handleInput('name', value)}
            />
            <TextInput
                placeholder='Enter Email'
                value={formData.email}
                onChangeText={(value) => handleInput('email', value)}
            />
            <Button title='Update With Patch' onPress={handleUpdate} />
        </View>
    )
}

export default PATCH_API