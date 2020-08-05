import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, isLogged} from './actions'



function App() {
  const count = (useSelector(state => state.counter))
  const logged = (useSelector(state => state.isLogged))

  const dispatch = useDispatch()


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {logged ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}
      <button onClick={() => dispatch(isLogged())}>Log in</button>
    </div>
  );
}

export default App;
