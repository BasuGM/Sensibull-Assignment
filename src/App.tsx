// React Imports
import React, { FC } from "react";

// MUI Imports
import { Box, Typography } from "@mui/material";
import RoutePath from "./routes/RoutePath";
import Instruments from "./components/Instruments";

// Functional Imports

// Local Imports

interface AppProps {}

const App: FC<AppProps> = (props) => {
  return (
    <Instruments />
  );
};

export default App;
