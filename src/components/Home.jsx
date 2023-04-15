import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  return <div>This is Home Page and User Is {user?.displayName}</div>;
};

export default Home;
