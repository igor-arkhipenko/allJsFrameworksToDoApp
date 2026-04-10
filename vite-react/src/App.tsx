import { useState } from 'react'

const STORAGE_KEY = 'react-todos'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState<string[]>(() => {
    try {
      const existingTodos = localStorage.getItem(STORAGE_KEY)
      return existingTodos ? JSON.parse(existingTodos) : []
    } catch {
      return []
    }
  })

  const addTodo = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = inputValue.trim()
    if (!trimmed) return

    const next = [...todos, trimmed]
    setTodos(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setInputValue('')
  }

  return <div>
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>

    <form onSubmit={addTodo}>
      <input type='text' placeholder='What needs to be done?' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <input type="submit" value='Add Todo' />
    </form>
  </div>
}

export default App
