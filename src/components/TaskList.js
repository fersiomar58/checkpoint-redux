import React from 'react'
import { useSelector } from 'react-redux'
import { TaskCard } from './TaskCard'

export const TaskList = () => {
    const{ todos}=useSelector(state=>state)
   
  return (
    <div>{
        React.Children.toArray(todos.map(task=><TaskCard data={task}/>))}</div>
  )
}
