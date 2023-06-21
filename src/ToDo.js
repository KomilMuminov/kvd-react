import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button } from '@mui/material';

const ToDo = ({ todo, removeTask }) => {
  return (
    <>
      <div key={todo.id} className="item-todo">
        <div className={todo.complete ? 'item-text strike' : 'item-text'}>
          {todo.task}
        </div>
        <div className="item-delete" onClick={() => removeTask(todo.id)}>
          <Button variant='contained'>Удалить</Button>
        </div>
      </div>
      
    </>
  );
};
export default ToDo;



