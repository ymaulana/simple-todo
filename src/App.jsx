import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to Gym',
      day: 'Feb 5th at 8:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Breakfast',
      day: 'Feb 5th at 10:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hunting Streetwear',
      day: 'Feb 5th at 1:00pm',
      reminder: false,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container mx-auto my-[30px] min-h-[300px] max-w-[500px] overflow-auto rounded-md border border-slate-400 p-[30px]'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task to show!'
      )}
    </div>
  );
}

export default App;
