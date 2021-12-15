// 1.  Import React
import React, { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Task.css';

// 2.  Create a function that returns JSX
const Task = () => {
  const [isDone, setIsDone] = useState(false);
  console.log(`isDone = ${isDone}`);
  const buttonClass = isDone ? 'tasks__item__toggle--completed' : '';

  const toggleComplete = () => {
    console.log('Task Toggle');
    setIsDone(!isDone);
  };
  const removeTask = () => {
    console.log('Remove Task');
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        Mow the lawn
      </button>
      <button
        className="tasks__item__remove button alert pull-right"
        onClick={removeTask}
      >
        <i className="fa fa-times">
          <FontAwesomeIcon icon={faTimes} />
        </i>
      </button>
    </li>
  );
};

// 3. Export the function
export default Task;
