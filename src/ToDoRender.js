import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { Typography } from '@mui/material';
const ToDoRender = () => {
  const [todos, setTodos] = React.useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
      };
      setTodos([...todos, newItem]);
      console.log(newItem.id);
    }
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <Typography variant="h3">ToDo List</Typography>
        <h3>Список задач: {todos.length} </h3>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo} removeTask={removeTask} />;
        })}
      </div>
    </>
  );
};
export default ToDoRender;
