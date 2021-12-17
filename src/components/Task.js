import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, text, done, completedCallback, deleteCallback }) => {
  const buttonClass = done ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => completedCallback(id)}
      >
        {text}
      </button>
      <button
        className="tasks__item__remove button alert pull-right"
        data-testid={`delete button ${id}`}
        onClick={() => deleteCallback(id)}
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
  deleteCallback: PropTypes.func.isRequired,
};

export default Task;
