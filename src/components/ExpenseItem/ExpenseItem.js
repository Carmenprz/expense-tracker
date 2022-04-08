import React from 'react'
import './styles.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'

export default function ExpenseItem(props) {

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.amount}</p>
      </div>
    </Card>
  )
}
