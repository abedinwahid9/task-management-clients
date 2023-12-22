import { Button } from "@material-tailwind/react";
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskCard from "../../components/TaskCard/TaskCard";
import useAxiosPublic from "../../components/PublicAxios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TaskManager = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: tasks = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks`);
      return res.data;
    },
  });

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
          <CreateTask refetch={refetch}></CreateTask>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10  w-full mt-10 px-5">
        <div className="">
          <h2 className="text-white text-center bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
            To-Do
          </h2>
          <div>
            {tasks.map((task, i) => {
              return (
                <TaskCard refetch={refetch} key={i} task={task}></TaskCard>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="text-white text-center bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
            Ongoing
          </h2>
        </div>
        <div className="">
          <h2 className="text-white text-center bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
            Complete
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
