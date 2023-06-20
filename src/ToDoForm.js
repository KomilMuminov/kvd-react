import React from 'react';

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
            <button>Сохранить</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ToDoForm;
