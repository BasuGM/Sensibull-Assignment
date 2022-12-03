// React Imports
import React, { FC } from "react";

// MUI Imports
import {} from "@mui/material";

// Functional Imports
import { Routes, Route } from "react-router-dom";
import Instruments from "../components/Instruments";
import Quotes from "../components/Quotes";

// Local Imports

interface RoutePathProps {}

const RoutePath: FC<RoutePathProps> = (props) => {

  return (
    <Routes>
      <Route path={"/"} element={<Instruments />} />
      <Route path={"/quotes/:symbol"} element={<Quotes />} />
    </Routes>
  );
};

export default RoutePath;
