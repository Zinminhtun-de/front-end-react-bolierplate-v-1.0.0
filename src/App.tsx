import { useEffect, useState } from "react"
import tw from "twin.macro"

const H1 = tw.h1`text-3xl font-bold underline`
function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res.todos))
  }, [])
  return (
    <>
      <H1 className="text-3xl font-bold underline">Hello world!</H1>
      <h1>Vite</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>{todos.length && <div>Todo List : {todos.length}</div>}</div>
    </>
  )
}

export default App
