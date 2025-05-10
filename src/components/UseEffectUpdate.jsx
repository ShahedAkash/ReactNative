import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectUpdate = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    useEffect(()=>{
        console.log('useEffectUpdatePhase')
    }, [counter]); // for specific state update it will call again and again, just have to put the state name inside this []
  return (
    <View>
      <Text style={{fontSize: 20, marginVertical: 20, textAlign:'center', borderTopWidth: 1}}>UseEffectUpdate</Text>
      <Text style={{fontSize: 15}}>Counter : {counter}</Text>
      <Text style={{fontSize: 15, marginVertical: 20}}>Score : {score}</Text>
      <Button title='counter + 1' onPress={()=> setCounter(counter + 1)}/>
      <Button title='Score + 1' onPress={()=> setScore(score + 1)}/>
    </View>
  )
}

export default UseEffectUpdate