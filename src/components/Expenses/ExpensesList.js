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
  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={yearSelected}
          onSelectedDate={SelectedDateHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}
