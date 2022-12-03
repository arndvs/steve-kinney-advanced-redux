import CreateTask from './create-task';
import TaskList from './task-list';
import UserList from './user-list';


const Supertasker = () => {
  return (
    <div className="p-12 flex">
      <div className="">
        <CreateTask />

      </div>
      <div className=" flex items-start flex-1 overflow-auto h-96 space-x-4 px-12">

          <UserList />


      </div>
      <div className="h-96 overflow-auto">
              <TaskList />
          </div>
    </div>
  );
};

export default Supertasker;
