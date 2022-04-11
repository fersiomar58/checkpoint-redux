import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewtask } from '../redux/actions';

export const Addnewtask = () => {
const [action, setAction] = useState("")
const dispatch=useDispatch();
const handelSubmit=(e)=>{
    e.preventDefault()
    const task={
        id:Math.random( ),
        action,
        isDone:false
    };
    dispatch(addNewtask(task))
};
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input className='open' type="text" value={action} onChange={e=>setAction(e.target.value)} />
            <button className='open'    type='submit'>Add</button>
        </form>
    </div>
  )
}
