// React Imports
import React, { FC } from "react";

// MUI Imports
import {} from "@mui/material";

// Functional Imports
import { Routes, Route } from "react-router-dom";
import Instruments from "../components/Instruments";

// Local Imports

interface RoutePathProps {}

const RoutePath: FC<RoutePathProps> = (props) => {

  return (
    <Routes>
      <Route path={"/"} element={<Instruments />} />
    </Routes>
  );
};

export default RoutePath;
