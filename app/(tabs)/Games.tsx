import {  StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'


const GamesScreen = () => {

    return (
        <ThemedView style={styles.container}>
            <ThemedText>Games</ThemedText>
        </ThemedView>
    )
}

export default GamesScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 60
    }
})