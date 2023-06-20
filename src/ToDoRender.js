import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
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
        <header>
            <h2>ToDo List</h2>
          <h3>Список задач: {todos.length} </h3>
        </header>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </>
  );
};
export default ToDoRender;
