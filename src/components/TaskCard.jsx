import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/actions'

export const TaskCard = ({data}) => {
    const dispatch=useDispatch() 
      return (
    <div>
        <h1 className='h1'>{data.action}</h1>
        <button className='btn'    onClick={()=>dispatch( deleteTask(data.id))}>Delete</button>
        <button className='btn'   onClick={()=>dispatch(completeTask(data.id))}>Complete</button>
        {/* <hr /> */}
        </div>
  )
}
