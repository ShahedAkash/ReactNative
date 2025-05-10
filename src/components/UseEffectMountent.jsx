import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectMountent = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('Hello Welcome');
    }, []); // [] is for Mounting once, if don't use this it will call the useEffect again and again
  return (
    <View>
      <Text style={{fontSize:20, textAlign:'center', marginTop:40}}>UseEffectMountent</Text>
      <Text style={{fontSize:20, marginVertical:40}}>Count Number : {count}</Text>
      <Button title='counter + 1' onPress={()=> setCount(count + 1)}/>
    </View>
  )
}

export default UseEffectMountent;