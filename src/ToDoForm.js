import React from 'react';
import { Button } from '@mui/material';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = React.useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={userInput}
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Введите задачу"
            />
            <Button id="btnSubmit" variant='contained' onClick={handleSubmit}>Добавить задачу</Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ToDoForm;
