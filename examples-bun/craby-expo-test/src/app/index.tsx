import { StyleSheet, Text, View } from "react-native";
import { CrabyModuleTest } from "craby_module_test";

const logs = [
  "CrabyModuleTest:add(1, 2) == " + CrabyModuleTest.add(1, 2),
  "CrabyModuleTest:divide(1, 2) == " + CrabyModuleTest.divide(1, 2),
  "CrabyModuleTest:multiply(1, 2) == " + CrabyModuleTest.multiply(1, 2),
  "CrabyModuleTest:subtract(1, 2) == " + CrabyModuleTest.subtract(1, 2),
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>craby-expo-test</Text>
      <Text style={styles.subtitle}>A minimal Expo starter screen.</Text>
      {logs.map((log, index) => (
        <Text key={index} style={styles.log}>{log}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#111111",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
  },
  log: {
    marginTop: 8,
    fontSize: 14,
    color: "#333333",
  },
});
