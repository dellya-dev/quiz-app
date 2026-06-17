function FinalScore({ score, questions, handleReplay, amountQuestion, persentaseScore}) {

 return(
  <>
    <h3>Selesai</h3>
    <p>Kamu sudah menjawab semua soal</p>
    <h3>Skor {score}/{questions.length}</h3>
    <h3>Benar {persentaseScore}%</h3>
    <h3>Jumlah soal {amountQuestion}</h3>
    <button
      onClick={() => handleReplay()}
    >🔄️ Main Lagi</button>
  </>
 )
}
export default FinalScore