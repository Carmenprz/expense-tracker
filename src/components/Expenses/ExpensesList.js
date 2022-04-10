import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'

export default function ExpensesList(props) {
  const [yearSelected, setYearSelected] = useState('2020')
  //we define the function we want to pass down
  const SelectedDateHandler = (selectedDate) => {
    setYearSelected(selectedDate)
  }
  return (
    <div>
      <Card>
        <ExpenseFilter selected={yearSelected} onSelectedDate={SelectedDateHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
      </Card>
    </div>
  )
}
