import React from "react";
import { Stack, usePathname, useRouter } from "expo-router";
import { NativeBaseProvider, Heading, Box, Button } from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useContext } from "react";
import { QuestionContext, QuestionProvider } from "../context/QuestionContext";

const Question = () => {
  const { setAttemptedQuestion, setCorrectAnswer, correctAnswer, data } =
    useContext(QuestionContext);
  const pathname = usePathname().substring(1);
  const question = data.filter((data) => data.qno == pathname)[0];
  const [color1, setColor1] = useState("info.500");
  const [color2, setColor2] = useState("info.500");
  const [color3, setColor3] = useState("info.500");
  const [color4, setColor4] = useState("info.500");
  const [tries, setTries] = useState(0);
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  return (
    <QuestionProvider>
      <NativeBaseProvider>
        <StatusBar style="inverted" />
        <Stack.Screen
          options={{
            title: "Question " + pathname,
            headerStyle: { backgroundColor: "#000e21" },
            headerShadowVisible: false,
            headerTitleStyle: { color: "#f5f5f4" },
            animation: "slide_from_right",
            headerTintColor: "#f5f5f4",
          }}
        />
        <Box
          flex={1}
          bg="darkBlue.900"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading color={"lightText"} marginBottom={10} paddingX={4}>
            {question.question}
          </Heading>
          <Box>
            <Button
              marginBottom={4}
              backgroundColor={color1}
              onPress={
                tries == 0
                  ? () => {
                      question.options[0] == question.answer
                        ? setColor1("success.400")
                        : setColor1("warning.500");
                      question.options[0] == question.answer
                        ? setCorrectAnswer(correctAnswer + 1)
                        : null;
                      setTries(1);
                      setAttemptedQuestion((item) => item++);
                    }
                  : null
              }
            >
              {question.options[0]}
            </Button>
            <Button
              marginBottom={4}
              backgroundColor={color2}
              onPress={
                tries == 0
                  ? () => {
                      question.options[1] == question.answer
                        ? setColor2("success.400")
                        : setColor2("warning.500");
                      question.options[1] == question.answer
                        ? setCorrectAnswer(correctAnswer + 1)
                        : null;
                      setTries(1);
                      setAttemptedQuestion((item) => item++);
                    }
                  : null
              }
            >
              {question.options[1]}
            </Button>
            <Button
              marginBottom={4}
              backgroundColor={color3}
              onPress={
                tries == 0
                  ? () => {
                      question.options[2] == question.answer
                        ? setColor3("success.400")
                        : setColor3("warning.500");
                      question.options[2] == question.answer
                        ? setCorrectAnswer(correctAnswer + 1)
                        : null;
                      setTries(1);
                      setAttemptedQuestion((item) => item++);
                    }
                  : null
              }
            >
              {question.options[2]}
            </Button>
            <Button
              marginBottom={4}
              backgroundColor={color4}
              onPress={
                tries == 0
                  ? () => {
                      question.options[3] == question.answer
                        ? setColor4("success.400")
                        : setColor4("warning.500");
                      question.options[3] == question.answer
                        ? setCorrectAnswer(correctAnswer + 1)
                        : null;
                      setTries(1);
                      setAttemptedQuestion((item) => item++);
                    }
                  : null
              }
            >
              {question.options[3]}
            </Button>
          </Box>
        </Box>
        <Box flexDirection={"row"} bg="darkBlue.900">
          <Button
            width={"50%"}
            variant={"subtle"}
            borderRadius={0}
            onPress={
              pathname != 1 ? () => router.push(`${question.qno - 1}`) : null
            }
            isLoading={loading}
            onPressIn={() => (pathname != 1 ? setIsLoading(true) : null)}
            onResponderEnd={() => setIsLoading(false)}
          >
            Previous
          </Button>
          <Button
            width={"50%"}
            variant={"subtle"}
            borderRadius={0}
            onPress={
              pathname != data.length && tries != 0
                ? () => router.push(`${question.qno + 1}`)
                : pathname == data.length && tries != 0
                ? () => router.replace("/result/result")
                : null
            }
            isLoading={loading}
            onPressIn={() =>
              pathname != data.length && tries != 0 ? setIsLoading(true) : null
            }
            onResponderEnd={() => setIsLoading(false)}
          >
            {pathname != data.length ? "Next" : "Submit"}
          </Button>
        </Box>
      </NativeBaseProvider>
    </QuestionProvider>
  );
};

export default Question;
