import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./Pages/Home/Home.jsx";
import TaskManager from "./Pages/TaskManager/TaskManager.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/Home/SignUp/SignUp.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./AuthContext/AuthContext.jsx";
import LoginRoute from "./PrivateRoute/LoginRoute.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <LoginRoute>
            <Login></Login>
          </LoginRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <LoginRoute>
            {" "}
            <SignUp></SignUp>
          </LoginRoute>
        ),
      },
      {
        path: "/taskmanager",
        element: (
          <PrivateRoute>
            <TaskManager></TaskManager>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactus",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <DndProvider backend={HTML5Backend}>
            <RouterProvider router={router} />
          </DndProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);
