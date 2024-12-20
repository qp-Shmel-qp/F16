import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Не выполнено' : 'Выполнено'}
      </button>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
};

export default Task;
