import { ScrollView, FlatList } from "react-native";
import React from "react";
import QuestionCard from "./QuestionCard";
import questions from "../data/questions";

const QuestionsList = () => {
  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => <QuestionCard qno={item.qno} />}
      keyExtractor={(item) => item.qno}
    />
  );
};

export default QuestionsList;
