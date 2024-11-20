import Form1 from "./Form1";
import React from "react";
import React, { useState } from "react";

const App = () => {
  return (
    <div className="container">
      <h1>localStorage with React hooks</h1>
      <form>
        <input type="text" />

        <input type="file" />
      </form>
    </div>
  );
};
export default App;