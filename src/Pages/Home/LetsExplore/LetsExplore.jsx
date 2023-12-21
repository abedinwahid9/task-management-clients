import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LetsExplore = () => {
  return (
    <div className="flex justify-center items-center md:mt-20 mt-10">
      <div className="bg-mainColor flex py-3 px-8 w-3/4 rounded-full justify-between justify-center items-center">
        <Typography className="text-white font-bold text-2xl">
          Create Your Task
        </Typography>
        <Link to="taskmanager">
          <Button className="bg-secondColor  flex gap-3 items-center">
            <span>Let’s Explore</span> <ArrowRightIcon></ArrowRightIcon>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LetsExplore;
