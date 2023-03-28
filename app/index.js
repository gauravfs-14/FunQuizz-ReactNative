import React from "react";
import { NativeBaseProvider, Heading, Box } from "native-base";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Welcome from "../components/Welcome";
import QuestionsList from "../components/QuestionsList";

export default function App() {
  return (
    <NativeBaseProvider>
      <Stack.Screen
        options={{
          title: "FunQuizz",
          headerStyle: { backgroundColor: "#000e21" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#f5f5f4" },
        }}
      />
      <StatusBar style="inverted" />
      <Box flex={1} bg="darkBlue.900">
        <Welcome />
        <Heading
          marginX={5}
          marginY={4}
          borderBottomWidth={1}
          borderBottomColor={"info.400"}
          color="lightText"
        >
          Questions
        </Heading>
        <QuestionsList />
      </Box>
    </NativeBaseProvider>
  );
}
