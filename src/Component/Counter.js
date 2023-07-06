import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './Action';
import './counter.css';



function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
  
    return (
      <div className="counter-container">
        <h2 className="counter-value">Counter: {count}</h2>
        <button className="counter-button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="counter-button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    );
  }
  
 

export default Counter