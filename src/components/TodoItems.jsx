import React, { useState } from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import edit from '../assets/edit_button.png'


const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTodo(id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className='flex items-center my-3 gap-2'>
      {isEditing ? (
        <div className='flex flex-1 items-center'>
          <input 
            className='flex-1 border-2 border-gray-300 rounded-md px-2 py-1 outline-none'
            type='text'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit} className='bg-green-500 text-white px-3 py-1 rounded-md ml-2'>Save</button>
          <button onClick={() => setIsEditing(false)} className='bg-red-500 text-white px-3 py-1 rounded-md ml-2'>Cancel</button>
        </div>
      ) : (
        <div className='flex flex-1 items-center cursor-pointer'>
          <img onClick={() => toggle(id)} className='w-7' src={isComplete ? tick : not_tick} alt="" />
          <p className={`text-slate-700 ml-4 text-decoration-slate-500 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
      )}
      {!isEditing && (
        <>
          <img src={edit} onClick={() => setIsEditing(true)} className='w-4 cursor-pointer opacity-50' alt="" />
          <img src={delete_icon} onClick={() => deleteTodo(id)} className='w-3.5 cursor-pointer' alt="" />
        </>
      )}
    </div>
  );
}

export default TodoItems;
