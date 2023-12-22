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

const Login = () => {
  return (
    <div className="flex justify-center mt-28">
      <Card className="xl:w-1/2 w-full p-5 bg-transparent shadow-md shadow-thirdColor ">
        <CardHeader
          variant="gradient"
          // color="gray"
          className="mb-4 grid h-28 place-items-center bg-thirdColor"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input color="white" label="Email" size="lg" />
          <Input color="white" label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-thirdColor " fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to="/signup">
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Link>
          </Typography>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outlined"
              className="flex text-white mt-4 items-center gap-3 bg-secondColor"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              Continue with Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
