import "./CurrentQuestion.css"

function CurrentQuestion({ activeQuestion, activeOptions, handleAnswer, activeAnswer, selectedOption, score }) {
  const labelOptions = ["A", "B", "C", "D", "E", "F", "G"]
  
  const colorOptionsClick = (option) => {
    if (selectedOption === null) {
      return "white"
    }
    if (option === activeAnswer) {
      return "green" 
    }
    if (option === selectedOption && option !== activeAnswer) {
      return "red"
    } 
  }

  const iconOptionsClick = (option) => {
    if (selectedOption === null) {
      return null
    }
    if (option === activeAnswer) {
      return "✅" 
    }
    if (option === selectedOption && option !== activeAnswer) {
      return "❌"
    } 
  }    
  
  return(
    <div className="question-card">
      <h3>Score: {score}</h3>
      <h3>{activeQuestion}</h3>
      <div className="options">
        {activeOptions.map((option, index) => (
        <button
          key={index}
          option={option}
          onClick={() => handleAnswer(option)}
          style={{
            background: 
              colorOptionsClick(option) === "green"
              ? "green" 
              : colorOptionsClick(option) === "red"
              ? "red"
              : "white"
            }
          }
          disabled={selectedOption !== null}
        >
         {labelOptions[index]}. {option} {iconOptionsClick(option)}
        </button>
      ))}</div>
    </div>
  )
}

export default CurrentQuestion