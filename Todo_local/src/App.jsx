import { useEffect, useState } from 'react'
import Todoform from './components/Todoform'
import './App.css'
import { TodoProvider } from './context'
import Todoitems from './components/Todoitems'
function App() {
  const [todos,setTodos]=useState([])
  
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo:prevtodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!==id)))
  }
  const toggleCompl = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  //fetch the todos using local storage

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))/*key*/
    if(todos && todos.length>0)
      {
        setTodos(todos)
      }
  },[])
  
  //put todos in the local storage

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  return (
    
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompl}}>
         <div className=" min-h-screen py-8">
                <div className=" bg-[#1c304d] w-full max-w-3xl mx-auto shadow-md rounded-lg px-8 py-7 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                        <Todoitems todo={todo}/>
                       </div>
                        ))
                      }
                      </div>
                </div>
          </div>
    </TodoProvider>  
    )
}

export default App
