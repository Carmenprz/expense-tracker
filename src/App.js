import './App.css';
import ExpensesList from './components/Expenses/ExpensesList';

function App() {
  const expenses = [
    {'title': 'Car Insurance', 'amount': 294.67, 'date': new Date(2021, 5, 12)},
    {'title': 'Toilet paper', 'amount': 24.67, 'date': new Date(2021, 4, 10)}
  ];
  return (
    <div className="App">
        <ExpensesList items={expenses}/>
    </div>
  );
}

export default App;
