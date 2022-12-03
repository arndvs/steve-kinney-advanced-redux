import { useAppSelector, useTasks } from '../../state/hooks';
import Loading from './loading';
import Task from './task';

const TaskList = () => {
//   const { tasks } = useContext(ApplicationContext);

  const [tasks, loading] = useTasks();


  return (
    <section className="space-y-2">
      <Loading loading={loading} />
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
