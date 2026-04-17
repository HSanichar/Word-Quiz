import { useState } from "react";

import { CORE_CONCEPTS, QUIZ_QUESTIONS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  function handleAnswer(option) {
    setSelectedAnswer(option);
    setTotal(prev => prev + 1);

    if (option === QUIZ_QUESTIONS[currentQuestion].correct) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
    } else {
      setIsCorrect(false);
    }
  }

  function nextQuestion() {
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer("");
    setIsCorrect(null);
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div>
      <Header />

      <main>

        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="quiz">
          <h2>Word Quiz</h2>

          <h3>{question.word}</h3>

          {question.options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}

          {selectedAnswer && (
            <p className={isCorrect ? "correct" : "incorrect"}>
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
          )}

          {selectedAnswer && !isCorrect && (
            <p>
              Correct Answer: {question.correct}
            </p>
          )}

          {selectedAnswer && currentQuestion < QUIZ_QUESTIONS.length - 1 && (
            <button onClick={nextQuestion}>
              Next Question
            </button>
          )}

          <p>
            Score: {score} / {total}
          </p>

        </section>

      </main>
    </div>
  );
}

export default App;