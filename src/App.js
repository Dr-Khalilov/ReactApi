import './App.css';
import Counter from './components/Counter';
import Calendar from './components/Calendar';

function App() {
  const stepNumber = 100;
  return (
    <>
      <Counter stepNumber={stepNumber} />
    </>
  );
}

export default App;
