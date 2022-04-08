import React from 'react'
import './styles.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

export default function ExpenseItem(props) {

  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.amount}</p>
      </div>
    </div>
  )
}
