import { StyleSheet, Text, View } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { useEffect, useState } from 'react';
import { GameProp } from '.';
import Game from '@/api/Game';



export default function TabTwoScreen() {
  const [data, setData] = useState<GameProp[]>();



  useEffect(() => {
    async function getData() {
      const result = await Game();
      if (result) {
        setData(result);
      } else {
        console.error('No data returned from API.');
      }
    }
    getData();
   
  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Game Movie</ThemedText>
      </ThemedView>
      <View>
        <Text>{data?.length}</Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
