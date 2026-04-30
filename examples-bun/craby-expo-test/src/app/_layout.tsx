import { Stack } from "expo-router";

import { CrabyModuleTest } from "craby_module_test";

export default function RootLayout() {
  console.log("CrabyModuleTest:add(1, 2) == ", CrabyModuleTest.add(1, 2));
  console.log("CrabyModuleTest:divide(1, 2) == ", CrabyModuleTest.divide(1, 2));
  console.log("CrabyModuleTest:multiply(1, 2) == ", CrabyModuleTest.multiply(1, 2));
  console.log("CrabyModuleTest:subtract(1, 2) == ", CrabyModuleTest.subtract(1, 2));
  return <Stack screenOptions={{ headerShown: false }} />;
}
