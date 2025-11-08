import React, { useContext } from "react";
import Authcontext from "../Authcontext/Authcontext";
import { Link, Navigate } from "react-router";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default Privateroute;
