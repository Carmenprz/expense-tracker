import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

export default function ExpensesList(props) {
  return (
    <Card>
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
  )
}
