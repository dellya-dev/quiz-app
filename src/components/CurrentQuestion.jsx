

function CurrentQuestion({ activeQuestion, activeOptions }) {
  const labelOptions = ["A", "B", "C", "D", "E", "F", "G"]

  return(
    <div className="question-card">
      <h3>{activeQuestion}</h3>
      <div className="options">{activeOptions.map((option, index) => (
        <button
          key={index}
          option={option}
        >
         {labelOptions[index]}. {option}
        </button>
      ))}</div>
    </div>
  )
}

export default CurrentQuestion