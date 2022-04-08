import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expenses = [ {'title': 'Car Insurance', 'amount': 294.67, 'date': new Date(2021, 5, 12)}];
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
      </header>
    </div>
  );
}

export default App;
