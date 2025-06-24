import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./pages/Dashboard"
import Container from "./Components/Container";


const SideBarLayout = () => {
  return (
    <div className="flex ">
     <Sidebar/>
      <Outlet />
    </div>
  );
};

function App() {
  return (
     <div className="flex flex-row  sm:w-full">
    <div className="w-fit">
    <SideBarLayout /></div>
    {/* <Container> */}
    <div className="w-full">
      <Routes>
      {/* <Route element={<SideBarLayout />}> */}
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      {/* </Route> */}
      </Routes>
      </div>
      </div>
  );
}

export default App;
