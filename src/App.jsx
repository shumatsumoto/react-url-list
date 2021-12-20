import React, { useState } from "react";
import "./index.css";
import Container from "@mui/material/Container";
import Tabs from "./components/modules/Tabs";
import Header from "./components/modules/Header";
import SelectEnv from "./components/modules/SelectEnv";

function App() {
  const [env, setEnv] = useState("develop");
  const onChange = (e) => {
    setEnv(e.target.value);
  };
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <SelectEnv env={env} onChange={onChange} />
        <Tabs env={env} />
      </Container>
    </div>
  );
}

export default App;
