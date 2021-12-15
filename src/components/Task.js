// 1.  Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Task.css';

// 2.  Create a function that returns JSX
const Task = ({ done, id, text }) => {
  const [isDone, setIsDone] = useState(done);
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
        {text}
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

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

// 3. Export the function
export default Task;
