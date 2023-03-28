import React, { useState } from "react";

const QuestionContext = React.createContext();

const QuestionProvider = ({ children }) => {
  const [attemptedQuestion, setAttemptedQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const questions = [
    {
      qno: 1,
      question: "How do you catch a squirrel?",
      options: [
        "Climb a tree and act like a nut",
        "Hide in a bush and make squirrel noises",
        "Leave out a trail of acorns",
        "Use a squirrel-sized fishing net",
      ],
      answer: "Climb a tree and act like a nut",
    },
    {
      qno: 2,
      question: "What do you call a group of crows?",
      options: ["A murder", "A flock", "A gang", "A parliament"],
      answer: "A murder",
    },
    {
      qno: 3,
      question: "Which is the fastest animal in the world?",
      options: ["Cheetah", "Peregrine falcon", "Blue whale", "Roadrunner"],
      answer: "Peregrine falcon",
    },
    {
      qno: 4,
      question: "Which animal is known for having the strongest bite force?",
      options: ["The crocodile", "The lion", "The hippopotamus", "The shark"],
      answer: "The crocodile",
    },
    {
      qno: 5,
      question: "How many stomachs does a cow have?",
      options: ["One", "Two", "Three", "Four"],
      answer: "Three",
    },
    {
      qno: 6,
      question: "Which animal is known for having the best memory?",
      options: ["The elephant", "The dolphin", "The chimpanzee", "The octopus"],
      answer: "The elephant",
    },
    {
      qno: 7,
      question: "Which animal is the most venomous?",
      options: ["The spider", "The jellyfish", "The scorpion", "The snake"],
      answer: "The snake",
    },
  ];
  const value = {
    attemptedQuestion,
    setAttemptedQuestion,
    correctAnswer,
    setCorrectAnswer,
    data: questions,
  };
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
