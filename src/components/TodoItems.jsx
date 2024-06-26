import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        
        <div className='flex flex-1 items-center cursor-pointer'>
            <img onClick={()=>{toggle(id)}} className='w-7' src={isComplete? tick : not_tick} alt="" />
            <p className={`text-slate-700 ml-4 text-decoration-slate-500 text-[17px] ${isComplete? "line-through":""}`}>{text}</p>
        </div>
        <img src={delete_icon} onClick={()=>{deleteTodo(id)}} className='w-3.5 cursor-pointer' alt="" />
        </div>
  )
}

export default TodoItems