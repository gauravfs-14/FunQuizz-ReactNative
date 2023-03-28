import { useRouter } from "expo-router";
import { Box, Text, Button } from "native-base";
import { useState } from "react";

const QuestionCard = ({ qno }) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  return (
    <Button
      onPress={() => router.push(`${qno}`)}
      backgroundColor="primary.700"
      padding={5}
      margin={2}
      borderRadius={10}
      isLoading={loading}
      onPressIn={() => setIsLoading(true)}
      onResponderEnd={() => setIsLoading(false)}
    >
      <Text color={"lightText"}>Question {qno}</Text>
    </Button>
  );
};

export default QuestionCard;
