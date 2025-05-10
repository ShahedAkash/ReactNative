import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalDialogBox = () => {

    const [modalVisible, setModalisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalisible(true)}
            >
                <Text style={styles.buttonText}>Show Modal</Text>
            </TouchableOpacity>

            {/* For create Dialog Box */}
            <Modal 
                visible={modalVisible} 
                animationType='fade'
                transparent= {true}
                onRequestClose={()=> setModalisible(false)}
                > 
                <View style={styles.modalOverlay}>
                    <View style={styles.modalview}>
                        <Text style={styles.modalTitle}>Beautiful Modal</Text>
                        <Text style={styles.modalText}>This is Beautiful Modal</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={()=>setModalisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default ModalDialogBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    openButton: {
        backgroundColor: '#6200ea',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalview: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555'
    },
    closeButton: {
        backgroundColor: '#03dace',
        padding: 10,
        borderRadius: 10,
        elevation: 2
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})