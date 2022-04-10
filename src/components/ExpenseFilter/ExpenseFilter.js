const ExpenseFilter = (props) => {
  const dateSelectedHandler = (event) => {
    const selectedDate = event.target.value
    //we call the function that we received through that prop with that name
    props.onSelectedDate(selectedDate)
  }
  return (
    <div>
      <label>Filter by year</label>
      <select value={props.selected} onChange={dateSelectedHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  )
}
export default ExpenseFilter