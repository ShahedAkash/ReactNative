import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Srearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const contacts = [
        { id: 1, name: 'Akash' },
        { id: 2, name: 'Shahed' },
        { id: 3, name: 'Baker' },
        { id: 4, name: 'Ove' },
        { id: 5, name: 'Shobuj' },
        { id: 6, name: 'Asif' },
        { id: 7, name: 'Nazmul' },
    ]

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const renderItem = ({item}) => (
        <View style={styles.contantItem}>
            <Text style={styles.contantName}>{item.name}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact List</Text>
            <TextInput
                style={styles.searchBar}
                placeholder='Search Contacts...'
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList 
                data={filteredContacts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContraner}
            />
        </View>
    )
}

export default Srearch

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e3f2fd',
        padding: 20,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 20,
        textAlign: 'center',
    },
    searchBar:{
        height: 40,
        borderColor: '#90caf9',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    listContraner:{
        paddingBottom: 20,
    },
    contantItem:{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'

    },
    contantName:{
        fontSize: 18,
        color: '#424242'
    }
})