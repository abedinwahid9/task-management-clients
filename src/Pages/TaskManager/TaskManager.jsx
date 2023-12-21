import { Button } from "@material-tailwind/react";
import CreateTask from "../../components/CreateTask/CreateTask";

const TaskManager = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2
        style={{ textShadow: "_0_1px_0_rgb(0_0_0_/_40%)" }}
        className="text-4xl   mt-5  font-extrabold text-white"
      >
        Your Tasks
      </h2>
      <div className="flex justify-center mt-10 w-3/4">
        <div className="w-full flex justify-between">
          <Button className="text-sm bg-mainColor">Previous Task</Button>
          <CreateTask></CreateTask>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 items-center w-full mt-10">
        <div className="bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
          <h2 className="text-white text-center">To-Do</h2>
        </div>
        <div className="bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
          <h2 className="text-white text-center">Ongoing</h2>
        </div>
        <div className="bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
          <h2 className="text-white text-center">Complete</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
