import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NextUIProvider } from '@nextui-org/react';

const App = () => 
  <NextUIProvider>
    <PortfolioContainer />
  </NextUIProvider>
    ;

export default App;
