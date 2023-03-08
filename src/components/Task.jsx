import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onToggle(task.id);
      }}
      className={`task ${
        task.reminder ? 'border-l-8 border-green-800' : ''
      } my-2 rounded-md bg-slate-500 p-4 text-slate-200`}
    >
      <div className='flex items-center justify-between'>
        <div className='font-semibold'>
          <h3>{task.text}</h3>
          <p>{task.day}</p>
        </div>
        <FaTimes
          className='cursor-pointer text-blue-300'
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
