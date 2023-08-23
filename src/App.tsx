import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/Login";
import { LoginLayout } from "./Layout";
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
