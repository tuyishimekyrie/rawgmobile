import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { View, Text ,Image} from 'react-native'

const index = () => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <ThemedView>
            <Image source={require('@/assets/images/needforspeed.jpg')}  
/>
            <ThemedText>Rawg</ThemedText>
        </ThemedView>
    )
}

export default index