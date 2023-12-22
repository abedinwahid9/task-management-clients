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
import { AuthProvider } from "../../../AuthContext/AuthContext";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";

const SignUp = () => {
  const provider = new GoogleAuthProvider();
  const Auth = useContext(AuthProvider);

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const { createUser, loading, googleLogin } = Auth;

  const isPasswordValid = (password) => {
    if (password.length < 6) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one capital letter with no special characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating display name", error);
          });
        navigate("/taskmanager");
      })
      .catch((err) => {
        console.error(err);
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
            Sign Up
          </Typography>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardBody className="flex flex-col gap-4">
            <Input name="name" color="white" label="Name" size="lg" />
            <Input name="email" color="white" label="Email" size="lg" />
            <Input name="password" color="white" label="Password" size="lg" />
            {isPasswordValid && (
              <div className="text-[#ff2f2f]">{passwordError}</div>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" className="bg-thirdColor " fullWidth>
              Sign Up
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
        </form>
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
      </Card>
    </div>
  );
};

export default SignUp;
