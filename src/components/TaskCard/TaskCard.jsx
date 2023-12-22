import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import UpdateCard from "../UpdateCard/UpdateCard";
import useAxiosPublic from "../PublicAxios/useAxiosPublic";
import Swal from "sweetalert2";

const TaskCard = ({ task, refetch }) => {
  const { _id, title, descriptions, priority, status, deadlines } = task;

  let updateStatus = "ongoing";

  if (status === "pending") {
    updateStatus = "Ongoning";
  } else if (status === "ongoing") {
    updateStatus = "Complete";
  }

  const axiosPublic = useAxiosPublic();

  const handleTaskDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${_id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <Card className="mt-6 bg-mainColor">
      <CardBody>
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="h5" className="mb-2 text-white">
              {title}
            </Typography>
            <p className="mb-2 text-sm text-white">Deadline:{deadlines}</p>
          </div>
          <Button className="bg-thirdColor">{updateStatus}</Button>
        </div>
        <div className="mt-5">
          <Typography className="text-white">{descriptions}</Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="bg-thirdColor px-2 rounded-lg py-1 text-white">
              {priority}
            </h2>
          </div>
          <div className="flex gap-2">
            <UpdateCard></UpdateCard>
            {/* delete */}
            <Button onClick={handleTaskDelete} color="red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
