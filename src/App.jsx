import { useState } from 'react'
import './App.css'
import CurrentQuestion from './components/CurrentQuestion'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    console.log(activeQuestion)

    

  return (
    <>
      <h1>Quiz</h1>
      <CurrentQuestion
          activeQuestion={activeQuestion.question}
          activeOptions={activeQuestion.options}
      />
    </>
  )
}

export default App
