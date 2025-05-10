import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {id: 1 , title: 'item 1'},
    {id: 2 , title: 'item 2'},
    {id: 3 , title: 'item 3'},
    {id: 4 , title: 'item 4'},
];


const FlatListScreen = () => {
    const renderItem = ({item}) =>(
        <View style= {styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );

};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f8f8f8',
        paddingTop: 15,
    },
    list:{
        paddingHorizontal:20,
    },
    item:{
        backgroundColor:'crimson',
        borderWidth:5,
        borderColor:'yellow',
        padding: 20,
        marginVertical:8,
        borderRadius: 8,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:2,
    },
    title:{
        color:'#fff',
        fontSize:18
    }
  });

export default FlatListScreen;