import { Outlet } from "react-router-dom";
import "./App.css";
import bg from "../src/assets/bg.png";

import NavbarCompoents from "./components/Navbar/NavbarCompoents";

function App() {
  return (
    <div
      className="min-h-screen bg-no-repeat  bg-center bg-cover pt-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen  bg-[#0000006b]">
        <div className="container mx-auto">
          <NavbarCompoents></NavbarCompoents>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
