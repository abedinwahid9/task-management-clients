import { Button } from "@material-tailwind/react";
import CreateTask from "../../components/CreateTask/CreateTask";

import useAxiosPublic from "../../components/PublicAxios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import Section from "./Section";

const TaskManager = () => {
  const axiosPublic = useAxiosPublic();
  const [toDo, setTodo] = useState([]);
  const [onGoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);

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

  useEffect(() => {
    const fTodo = tasks.filter((task) => task.status === "todo");
    const fOnGoing = tasks.filter((task) => task.status === "ongoing");
    const fComplete = tasks.filter((task) => task.status === "complete");

    setTodo(fTodo);
    setOngoing(fOnGoing);
    setComplete(fComplete);
  }, [tasks]);

  const statusUses = ["todo", "ongoing", "complete"];

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
        {statusUses.map((item, i) => {
          return (
            <Section
              refetch={refetch}
              key={i}
              refetch={refetch}
              item={item}
              toDo={toDo}
              onGoing={onGoing}
              complete={complete}
            ></Section>
          );
        })}
      </div>
    </div>
  );
};

export default TaskManager;
