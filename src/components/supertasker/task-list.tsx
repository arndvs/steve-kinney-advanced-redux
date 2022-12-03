import { useAppSelector } from '../../state/hooks';
import Task from './task';

const TaskList = () => {
//   const { tasks } = useContext(ApplicationContext);

  const tasks = useAppSelector((state) => state.tasks.entities);


  return (
    <section className="space-y-2">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
