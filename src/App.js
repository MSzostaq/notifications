import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Notifications from "./components/Notifications";
import Toggle from "./components/Toggle";

const Form = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

function App() {
  const [notifications] = useState([
    {
      id: "1",
      type: "ok",
      title: "Toggle switched on",
      message: "This is a message.",
    },
    {
      id: "2",
      type: "error",
      title: "Toggle switched off",
      message: "This is not a message.",
    },
  ]);
  const [value, setValue] = useState(true);

  function onValueChange(newValue) {
    setValue(newValue);
  }
  return (
    <div className="App">
      <Form>
        <Toggle size="jumbo" value={value} onChange={onValueChange} />
      </Form>
      <AppNotifications notifications={notifications} />
    </div>
  );
}

export default App;
