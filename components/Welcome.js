import React from "react";
import { Box, Heading, Text, Button } from "native-base";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();
  return (
    <Box
      padding={5}
      margin={2}
      borderRadius={20}
      backgroundColor="darkBlue.700"
      color="lightText"
    >
      <Heading color="lightText" size={"2xl"}>
        Welcome!
      </Heading>
      <Text color="lightText" marginY={2}>
        Have the knowledge to win the FunQuizz?
      </Text>
      <Button
        width={"1/2"}
        borderRadius={5}
        variant={"subtle"}
        onPress={() => router.push(`${1}`)}
      >
        Play
      </Button>
    </Box>
  );
};

export default Welcome;
