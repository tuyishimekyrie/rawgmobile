import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

const index = () => {


    return (
        <ThemedView>
            <Image source={require('@/assets/images/needforspeed.jpg')}
            />
            <ThemedView style={styles.desc}>

                <ThemedText>Rawg</ThemedText>
                <ThemedText>`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias perspiciatis deleniti vel facilis. Aspernatur quo laborum porro ipsum ducimus repudiandae debitis velit facilis ea voluptas quis delectus enim odit, provident pariatur voluptates, natus repellendus neque vitae! Rerum ipsum unde asperiores est! Quibusdam officia commodi magnam aspernatur, unde quae minima?`</ThemedText>
            </ThemedView>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    desc: {
        display: "flex",
        gap: 4,
        padding: 10
    }
})
export default index