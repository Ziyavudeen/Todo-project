// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button id='bu1' onClick={() => toggleTodo(index)}>Complete</button>
      <button id='bu1' onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}

export default TodoItem;
