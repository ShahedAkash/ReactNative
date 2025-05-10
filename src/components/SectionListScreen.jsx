import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItems = [
    {
        title: 'Fruits',
        data: [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Mango'},
            {id: 3, name: 'Orange'},
            {id: 4, name: 'Banana'}
        ]
    },
    {
        title: 'Vegetales',
        data: [
            {id: 1, name: 'Carrot'},
            {id: 2, name: 'Potato'},
            {id: 3, name: 'Tomato'},
            {id: 4, name: 'Fish'}
        ]
    },
]

const SectionListScreen = () => {
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    )

    const renderSectionHeader = ({section}) =>(
        <View style={styles.header}>
            <Text style={styles.title}>{section.title}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text>SectionListScreen</Text>
            <SectionList 
                sections={listItems}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#f0f0f0',
        paddingTop: 20,
    },
    item: {
        width:'80%',
        backgroundColor:'#add8e6',
        padding:10,
        marginHorizontal:'auto',
        marginVertical:5,
        borderRadius:5,
    },
    title:{
        color:'white',
        margin:'auto',
        fontSize:30,
        fontStyle:'bold',
    }, 
    header:{
        height:50,
        backgroundColor:'blue',
        borderRadius:5
    }
})

export default SectionListScreen