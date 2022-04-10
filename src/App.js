import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const initial_expenses = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 5, 12) },
  { title: 'Toilet paper', amount: 24.67, date: new Date(2021, 4, 10) },
]
function App() {
  const [expenses, setExpenses] = useState(initial_expenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    }) //clean way of updating our state when it's based on an older snapshot of that same state.
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
