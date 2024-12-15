import React, { PropsWithChildren } from 'react'
import { View, StyleSheet } from 'react-native'

const FlexContainer = ({ children }: PropsWithChildren<{}>) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default FlexContainer


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical:10
    }
})