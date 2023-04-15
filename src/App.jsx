import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext } from "react";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
