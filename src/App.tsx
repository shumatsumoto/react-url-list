import React from "react";
import "./index.css";
import Container from "@mui/material/Container";
import Tabs from "./components/modules/Tabs";
import Header from "./components/modules/Header";
import SelectEnv from "./components/modules/SelectEnv";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <SelectEnv />
        <Tabs />
      </Container>
    </div>
  );
}

export default App;
