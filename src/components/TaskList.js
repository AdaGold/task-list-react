import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  // const { tasks } = props;
  const taskItems = tasks.map((task) => {
    return (
      <Task key={task.id} text={task.text} done={task.done} id={task.id} />
    );
  });

  console.log(taskItems);

  return <ul>{taskItems}</ul>;
};

// {
//   tasks: [
//     {
//       id: 1,
//       text: 'mow the lawn',
//       done: false,
//     },
//     {
//       id: 1,
//       text: 'mow the lawn',
//       done: false,
//     },

//   ]
// }

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default TaskList;
