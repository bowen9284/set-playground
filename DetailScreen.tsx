import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

export function DetailScreen() {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: item.uri }}
        style={styles.thumbnail}
        sharedTransitionTag={`image-${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});
