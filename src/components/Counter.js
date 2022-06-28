import React from 'react'
import "./counter.css"
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from '../actions/action'

function Counter() {

    const currState = useSelector((state)=>state.changeNumber);
    const dispatch = useDispatch();
  return (
    <div className="counter">
        <a  onClick={()=>dispatch(decNumber())}>-</a>
        <input type="text"  value={currState}/>
        <a  onClick={()=>dispatch(incNumber(5))}>+</a>
    </div>
  )
}

export default Counter