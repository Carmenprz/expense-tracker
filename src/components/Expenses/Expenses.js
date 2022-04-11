import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

export default function Expenses(props) {
  const [yearSelected, setYearSelected] = useState('2021')
  //we define the function we want to pass down
  const SelectedDateHandler = (selectedDate) => {
    setYearSelected(selectedDate)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={yearSelected}
          onSelectedDate={SelectedDateHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}
