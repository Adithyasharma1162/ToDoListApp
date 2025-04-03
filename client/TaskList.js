import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title} - {task.completed ? 'Completed' : 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;