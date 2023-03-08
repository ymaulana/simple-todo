import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className='add-form mb-10' onSubmit={onSubmit}>
      <div className='form-control my-5'>
        <label className='block'>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          className='m-[5px] h-10 w-full py-1 px-2 text-[17px]'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className='form-control my-5'>
        <label className='block'>Day & Time</label>
        <input
          className='m-[5px] h-10 w-full py-1 px-2 text-[17px]'
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className='form-control my-5 flex items-center justify-between'>
        <label className='block flex-1'>Set Reminder</label>
        <input
          className='flex-2 m-[5px] h-5 w-full py-[3px] px-[7px] text-[17px]'
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <input
        type='submit'
        value='Save Task'
        className='btn inline-block w-full scale-95 cursor-pointer rounded-[5px] border-none bg-black py-[10px] px-[20px] text-[15px] text-white no-underline focus:outline-none active:transform'
      />
    </form>
  );
};

export default AddTask;
