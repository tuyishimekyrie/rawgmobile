import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import GameById from '@/api/GameById';

import FlexContainer from '@/components/FlexContainer';

interface GameDetail {
  id: number;
  name: string;
  description: string;
  background_image: string;
  metacritic: number
}

const FALLBACK_IMAGE = 'https://example.com/fallback-image.png';

const GameDetails = () => {
  const { id } = useLocalSearchParams();
  const gameId = typeof id === 'string' ? id : null;


  const [data, setData] = useState<GameDetail | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        if (gameId) {
          const result = await GameById(gameId);
          if (result) {
            setData(result);
          } else {
            console.error(`No data returned for game ID: ${gameId}`);
          }
        }
      } catch (error) {
        console.error(`Error fetching data for game ID: ${gameId}`, error);
      } finally {
        setLoading(false);
      }
    }
    getData();

  }, [gameId]);

  const truncateDescription = (desc: string, maxLength: number) =>
    desc.length > maxLength
      ? desc.substring(0, desc.lastIndexOf(' ', maxLength)) + '...'
      : desc;

  if (loading) {
    return <Text style={styles.loading}>Loading game details...</Text>;
  }

  if (!data) {
    return <Text>No game data available.</Text>;
  }



  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:`Details-${id}`}}/>
      <Image
        source={{ uri: data.background_image || FALLBACK_IMAGE }}
        style={styles.image}
      />
      <FlexContainer>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.meta}>{data.metacritic}</Text>
      </FlexContainer>
      <Text style={styles.description}>
        {truncateDescription(data.description, 400)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
  },
  meta: {
    color: "green"
  },
  loading: {
    height: 100,

    textAlign: "center",
    fontSize: 32
  }
});

export default GameDetails;
