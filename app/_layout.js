import { Stack } from "expo-router";
import { QuestionProvider } from "../context/QuestionContext";

export default function Layout() {
  return (
    <QuestionProvider>
      <Stack />
    </QuestionProvider>
  );
}
