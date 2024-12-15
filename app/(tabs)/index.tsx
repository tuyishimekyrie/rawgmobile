import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, Animated, Image, StyleSheet, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router'; 
import Game from '@/api/Game'; 
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export interface GameProp {
  id: number;
  name: string;
  background_image: string;
  rating: number
}

const HomeScreen = () => {
  const [data, setData] = useState<GameProp[]>();
  const router = useRouter(); 

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

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePressIn = (id: number) => {
    setHoveredId(id);
    Animated.spring(scaleAnim, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();

    router.push(`/gameDetails/${id}`);
  };

  const handlePressOut = () => {
    setHoveredId(null);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#0096c7', dark: '#0096c7' }}
          headerImage={
            <Link href={"/modal"}>
            <Image
              source={require('@/assets/images/needforspeed.jpg')}
              style={styles.bannerLogo}
              />
              </Link>
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.header}>Explore RAWG Video Games</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      }
      renderItem={({ item }) => (
        <Pressable
          onPressIn={() => handlePressIn(item.id)}
          onPressOut={handlePressOut}
          style={[
            styles.itemContainer,
            hoveredId === item.id && styles.itemHovered,
          ]}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Image source={{ uri: item.background_image }} style={styles.image} />
            <View style={styles.desc}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </Animated.View>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  bannerLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHovered: {
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: 420,
    height: 240,
    marginRight: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'left',
    padding: 10,
    color: '#333',
  },
  desc: {
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: 'space-between',
  },
  rating: {
   paddingRight: 10,
   color:"green"
  },
  header : {
    fontSize: 20,
    padding: 0,
    margin:0
  }
});

export default HomeScreen;
