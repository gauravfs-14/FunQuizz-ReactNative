import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  Button,
  FlatList,
  Heading,
  NativeBaseProvider,
  Text,
} from "native-base";
import React from "react";
import { useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";

const Result = () => {
  const { correctAnswer, data, setCorrectAnswer } = useContext(QuestionContext);
  const router = useRouter();
  return (
    <NativeBaseProvider>
      <StatusBar style="inverted" />
      <Stack.Screen
        options={{
          title: "Result",
          headerStyle: { backgroundColor: "#000e21" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#f5f5f4" },
          animation: "slide_from_right",
          headerTintColor: "#f5f5f4",
          headerBackVisible: false,
        }}
      />
      <Box
        flex={1}
        bg="darkBlue.900"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          color={"lightText"}
          borderBottomWidth={2}
          borderBottomColor="info.400"
          marginBottom={5}
        >
          You got {correctAnswer} out of {data.length} correct.
        </Heading>
        <Button
          onPress={() => {
            router.push("/");
            setCorrectAnswer(0);
          }}
        >
          Back to Home
        </Button>

        <Heading color={"lightText"} fontSize={"xl"} marginY={5}>
          Correct Answers
        </Heading>
        <FlatList
          data={data}
          renderItem={(item) => (
            <Box
              backgroundColor={"darkBlue.700"}
              marginBottom={4}
              borderRadius={10}
              padding={4}
              marginX={4}
            >
              <Text color={"lightText"} fontSize="lg">
                Q. {item.item.question}
              </Text>
              <Text color={"lightText"}>Answer: {item.item.answer}</Text>
            </Box>
          )}
          keyExtractor={(item) => item.qno}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default Result;
