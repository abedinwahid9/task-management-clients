import { useDrop } from "react-dnd";
import TaskCard from "../../components/TaskCard/TaskCard";
import useAxiosPublic from "../../components/PublicAxios/useAxiosPublic";

const Section = ({ item, refetch, toDo, onGoing, complete }) => {
  const axiosPublic = useAxiosPublic();
  let mapTotask = toDo;

  if (item === "ongoing") {
    mapTotask = onGoing;
  } else if (item === "complete") {
    mapTotask = complete;
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tasks",
    drop: (item) => {
      addItemToSection(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    axiosPublic.put(`/task/status/${id}`, { item }).then(() => {
      refetch();
    });
  };

  return (
    <div ref={drop}>
      <h2 className="text-white text-center bg-thirdColor text-3xl font-bold py-3 p-10 rounded-lg uppercase">
        {item}
      </h2>
      <div>
        {mapTotask.map((task, i) => {
          return <TaskCard refetch={refetch} key={i} task={task}></TaskCard>;
        })}
      </div>
    </div>
  );
};

export default Section;
