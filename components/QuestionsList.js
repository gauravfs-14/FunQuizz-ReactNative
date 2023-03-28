import { FlatList } from "react-native";
import React from "react";
import QuestionCard from "./QuestionCard";
import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

const QuestionsList = () => {
  const { data } = useContext(QuestionContext);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <QuestionCard qno={item.qno} />}
      keyExtractor={(item) => item.qno}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default QuestionsList;
