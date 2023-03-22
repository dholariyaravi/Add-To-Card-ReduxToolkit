
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, incrementbyamount, modual } from './Reduger';


 function Counter1() {

    const disp1 = useDispatch();
    const select =  useSelector ( (state) => state.count1);

    const [state, setstate]  =  useState(0);

    const hendal = (e) => {
        setstate (e.target.value)
    }

  return (
    <div>
        <p>{select.value}</p>
        <button onClick={() => disp1(decrement())}>decrement1</button>
        <button onClick={() => disp1(increment())}>incremnet2</button>
        <button onClick={() => disp1(modual())}>modual3</button>
        <button onClick={() => disp1(incrementbyamount(state))}>incredecres</button>

        <input type='text' onChange={hendal} />

        
    </div>
  )
}


export default Counter1;
