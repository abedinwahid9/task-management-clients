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
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { signInUser, googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email);
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        navigate("/taskmanager");
      })
      .catch((error) => {
        console.log(error.message);

        setErrorMessage("Incorrect password. Please try again.");
      });
  };

  const handlegoogleLogin = () => {
    googleLogin(provider)
      .then(() => {
        console.log("success");
        navigate("/taskmanager");
      })
      .catch((error) => {
        console.log(error);
        // Set the error message here
        // setErrorMessage("Google Login Failed");
      });
  };

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
        <form onSubmit={handleLoginForm}>
          <CardBody className="flex flex-col gap-4">
            <Input name="email" color="white" label="Email" size="lg" />
            <Input name="password" color="white" label="Password" size="lg" />
            {errorMessage && (
              <p className="text-[#ff3030] text-sm font-bold">{errorMessage}</p>
            )}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" className="bg-thirdColor " fullWidth>
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
                onClick={handlegoogleLogin}
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
        </form>
      </Card>
    </div>
  );
};

export default Login;
