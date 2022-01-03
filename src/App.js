import './App.css';
import Counter from './Counter'
import { decrease, increase, increaseByAmount } from './redux/countSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDark } from './redux/darkSlice';

function App() {
  const isDark = useSelector(s => s.dark.isDark)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className={isDark ? 'App-header dark' : 'App-header'}>
        <button onClick={() => {
          dispatch(toggleDark())
        }}>change mode</button>
        <Counter />
        <button onClick={() => {
          dispatch(increase())
        }}>INCREASE</button>
        <button onClick={() => {
          dispatch(decrease())
        }}>DECREASE</button>
        <button onClick={() => {
          const num = prompt('input a value to increase the count')
          dispatch(increaseByAmount(Number(num)))
        }}>
          INCREASE BY AMOUNT
        </button>
      </header>
    </div >
  );
}

export default App;
