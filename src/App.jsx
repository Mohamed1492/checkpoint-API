import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import QuizList from './components/QuizList'

function App() {
  const [list, setList] = useState(null)
  // appel des informations de l'API
const quizhandle=async()=>{
  try {
   const quiz=await axios.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean") 
   console.log(quiz)
   setList(quiz.data.results)
  } catch (error) {
    console.log(error)
    alert("get error")
  }
}
// declaration fonction au début
useEffect(() => {
  quizhandle()

}, [])
  return (
    <>
    {/* appel du component quizList */}
    <QuizList users={list}  />  
    </>
  )
}

export default App
