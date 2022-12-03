import CreateTask from './create-task';
import TaskList from './task-list';
import UserList from './user-list';


const Supertasker = () => {
  return (
    <div className="p-12">
      <div className="">
        <CreateTask />
        <UserList />
      </div>
      <div className="mt-2">
          <TaskList />
      </div>
    </div>
  );
};

export default Supertasker;
