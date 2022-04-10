import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'

export default function ExpensesList(props) {
  const [yearSelected, setYearSelected] = useState('2021')
  //we define the function we want to pass down
  const SelectedDateHandler = (selectedDate) => {
    setYearSelected(selectedDate)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected
  })

  let expensesContent = <p>No expenses found.</p>
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={yearSelected}
          onSelectedDate={SelectedDateHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )
}
