import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center mt-28">
      <Card className="xl:w-1/2 w-full p-5 bg-transparent shadow-md shadow-thirdColor ">
        <CardHeader
          variant="gradient"
          // color="gray"
          className="mb-4 grid h-28 place-items-center bg-thirdColor"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input color="white" label="Name" size="lg" />
          <Input color="white" label="Email" size="lg" />
          <Input color="white" label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-thirdColor " fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account!
            <Link to="/login">
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign In
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
