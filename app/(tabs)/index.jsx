import {
  Alert,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import useUser from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";
import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";

const Home = () => {
  const { navigate } = useUser();
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView safe={true} style={styles.container}>
      <Text>Home</Text>

      <Spacer height={300} />

      <View>
        <ThemedButton onPress={() => navigate.push("/diagnosis")}>
          <Text style={[{ textAlign: "center" }, styles.text]}>
            Get Diagnosed
          </Text>
        </ThemedButton>
      </View>

      {/* <Button
        title="Login"
        onPress={() =>
          Alert.alert("yeah", "bro", [
            {
              text: "Cancel",
              onPress: () => Alert.alert("yeah i'm not interested"),
            },
            { text: "Ok", onPress: () => Alert.alert("yeah you did it") },
          ])
        }
        color={theme.text}
      /> */}
      <Spacer />
      <Link href={'/login'}>Login</Link>
      
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
