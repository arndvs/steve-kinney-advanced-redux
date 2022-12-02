import { useContext } from 'react';
import ApplicationContext from '../../context';
import { useAppSelector } from '../../hooks';
import Task from './task';

const TaskList = () => {
//   const { tasks } = useContext(ApplicationContext);

  const tasks = useAppSelector((state) => state.tasks.entities);


  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
