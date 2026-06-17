import { useState } from 'react'
import './App.css'
import CurrentQuestion from './components/CurrentQuestion'
import FinalScore from './components/FinalScore'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [finished, setFinished] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Members BTS paling tampan?",
      options: ["Jin", "Suga", "JK", "V", "JImin", "J Hope", "RM"],
      answer: "Jin"
    },
    {
      id: 2,
      question: "Members BTS paling kaya?",
      options: ["RM", "Suga", "Jin", "V", "J HOope", "Jimin", "JK"],
      answer: "Jin"
    },
    {
      id: 3,
      question: "Members BTS paling Macho?",
      options: ["Jimin", "RM", "JK", "Jin", "V", "J Hope", "Suga"],
      answer: "Jin"
    },
    {
      id: 4,
      question: "Members BTS paling muda?",
      options: ["Jimin", "Jin", "JK", "V", "RM", "Suga", "J Hope"],
      answer: "Jin"
    },
    {
      id: 5,
      question: "Members BTS paling berotot?",
      options: ["J Hope", "Jin", "RM", "JK", "V", "Jimin", "Suga"],
      answer: "Jin"
    }
  ]

  const activeQuestion = questions[currentIndex]

  function handleAnswer(option) {
    setSelectedOption(option);

    if (activeQuestion.answer === option) {
      setScore(score + 1)
    }
  }

  function handleNextQuestion() {
    const isLastQuestion = currentIndex === questions.length - 1

    if (isLastQuestion === false) {
      setCurrentIndex(currentIndex + 1)
      setSelectedOption (null)
    } else {
      setFinished(true)
    }
  }

  function handleReplay() {
    setCurrentIndex(0)
    setScore(0)
    setFinished(false)
    setSelectedOption(null)
  }

  const amountQuestion = currentIndex + 1

  const persentaseScore = (score / questions.length) * 100

  return (
    <>
      <h1>Quis</h1>
      {finished
        ? <FinalScore 
            score={score}
            questions={questions}
            handleReplay={ handleReplay}
            amountQuestion={amountQuestion}
            persentaseScore={persentaseScore}
          /> 
        : <CurrentQuestion 
            activeQuestion={activeQuestion.question}
            activeAnswer={activeQuestion.answer}
            activeOptions={activeQuestion.options}
            score={score}
            handleAnswer={handleAnswer}
            selectedOption={selectedOption}
            nextQuestion={handleNextQuestion}
            questions={questions}
            amountQuestion={amountQuestion}
          />}
     
    </>
  )
}

export default App
