import './styles.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('updated!')
    console.log(title)
  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p>{props.amount}</p>
      </div>
      <button onClick={clickHandler}>Chage title</button>
    </Card>
  )
}
