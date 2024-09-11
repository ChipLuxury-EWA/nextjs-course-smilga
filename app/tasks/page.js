import TaskForm from "./_components/TaskForm";
import TasksList from "./_components/TasksList";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-5xl mb-8 font-bold">Tasks</h1>
      {/* // TODO add suspense */}
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TasksPage;
