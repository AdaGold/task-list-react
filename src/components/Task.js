import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, text, done, completedCallback }) => {
  const buttonClass = done ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {
          console.log('onClick called');
          completedCallback(id);
        }}
      >
        {text}
      </button>
      <button
        className="tasks__item__remove button alert pull-right"
        data-testid={`delete button ${id}`}
      >
        X
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  completedCallback: PropTypes.func.isRequired,
};

export default Task;
