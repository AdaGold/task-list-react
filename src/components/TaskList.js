import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, completedCallback }) => {
  const taskComponents = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        done={task.done}
        completedCallback={completedCallback}
      />
    );
  });

  return <ul className="tasks__list no-bullet">{taskComponents}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completedCallback: PropTypes.func.isRequired,
};

export default TaskList;
