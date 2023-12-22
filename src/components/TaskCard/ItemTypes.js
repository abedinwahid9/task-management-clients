// TaskColumn.js

import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { ItemTypes } from "./ItemTypes";

const TaskColumn = ({ title, tasks, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => onDrop(item, title.toLowerCase()),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop}>
      <div className="">
        <h2 className="text-white text-center bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg">
          {title}
        </h2>
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
