import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        // fetch('http://10.0.2.2:3000/users').then((res) => {
        //     res.json().then((result) => {
        //         console.log(result)
        //     })
        // })
        axios.get('http://10.0.2.2:3000/users').then((res)=>{
            console.log(res.data);
            setMyData(res.data);
        });
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>GET_API</Text>
            {
                myData.map(item =>(
                    <Text key={item.id}>{item.name}</Text>
                ))
            }
        </View>
    );
};

export default GET_API;