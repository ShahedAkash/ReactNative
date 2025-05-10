import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {id: 1 , title: 'item 1'},
    {id: 2 , title: 'item 2'},
    {id: 3 , title: 'item 3'},
    {id: 4 , title: 'item 4'},
    {id: 5 , title: 'item 5'},
    {id: 6 , title: 'item 6'},
    {id: 7 , title: 'item 7'},
    {id: 8 , title: 'item 8'},
    {id: 9 , title: 'item 9'},
    {id: 11 , title: 'item 10'},
    {id: 12 , title: 'item 11'},
    {id: 13 , title: 'item 12'},
    {id: 14 , title: 'item 13'},
    {id: 15 , title: 'item 14'},
    {id: 16 , title: 'item 15'},
    {id: 17 , title: 'item 16'},
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {
            data.map((item) =>
                <View key={item.id} style={styles.gridItem}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            )
        }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginVertical: 20,
        color: '#000',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    gridItem: {
        backgroundColor: '#ff6f61',
        padding: 20,
        marginBottom: 10,
        width: '45%',
        height: 100,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    }
})

export default Grid;