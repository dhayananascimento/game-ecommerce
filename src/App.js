import React from "react";
import Routes from "./routes";
import ListProvider from "./store/providers/ListProvider";

function App() {
  return (
    <ListProvider>
      <Routes />
    </ListProvider>
  );
}

export default App;
