import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const AlertExample = () => {
    const showAlert = () => {
        Alert.alert(  // 4 Paramitters in Alert
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancle'),
                    style: 'Cancel',
                },
                {
                    text: 'OK',
                    onPress: ()=> console.log('OK'),
                }
            ],
            {cancelable: false} // cancelable : true 
        );
    }
    return (
        <View>
            <Text style={{ fontSize: 25 }}>AlertExample</Text>
            <Button title="show Alert" onPress={showAlert} />
        </View>
    )
}

export default AlertExample