import ImprovedTaskForm from "./_components/ImprovedTaskForm";
import TaskForm from "./_components/TaskForm";
import TasksList from "./_components/TasksList";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-5xl mb-8 font-bold">Tasks</h1>
      {/* // TODO add suspense */}
      <div className="join join-vertical gap-4 w-full">
        <ImprovedTaskForm />
        <TaskForm />
      </div>
      <TasksList />
    </div>
  );
};

export default TasksPage;
