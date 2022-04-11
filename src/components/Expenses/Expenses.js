import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
      <Card>
        <ExpenseFilter
          selected={yearSelected}
          onSelectedDate={SelectedDateHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}
