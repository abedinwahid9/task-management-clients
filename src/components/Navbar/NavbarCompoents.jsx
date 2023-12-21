import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          href="#"
          className="flex items-center text-base text-white hover:text-blue-500 transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          href="#"
          className="flex items-center text-base text-white hover:text-blue-500 transition-colors"
        >
          Login
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          href="#"
          className="flex items-center text-base text-white hover:text-blue-500 transition-colors"
        >
          Contact Us
        </NavLink>
      </Typography>
    </ul>
  );
}

const NavbarCompoents = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto outline-none border-none  max-w-screen-xl bg-mainColor px-6 py-3">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <span className="">T</span>ask Manager
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarCompoents;
