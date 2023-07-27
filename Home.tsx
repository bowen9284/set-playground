import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, SafeAreaView, Pressable } from "react-native";
import Animated from "react-native-reanimated";

export function HomeScreen() {
  const navigation = useNavigation();

  const images = [];

  for (let i = 0; i < 30; i++) {
    images.push({ id: i, uri: `https://picsum.photos/seed/${i}/200/200` });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("Detail", { item })}>
              <Animated.Image
                source={{ uri: item.uri }}
                style={styles.thumbnail}
                sharedTransitionTag={`image-${item.id}`}
              />
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 5,
  },
});
