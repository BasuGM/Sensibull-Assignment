// React Imports
import React, { FC } from "react";

// MUI Imports
import RoutePath from "./routes/RoutePath";
// import Instruments from "./components/Instruments";
// import Quotes from "./components/Quotes";

// Functional Imports

// Local Imports

interface AppProps {}

const App: FC<AppProps> = (props) => {
  return (
    // <Instruments />
    <RoutePath />
    // <Quotes />
  );
};

export default App;
