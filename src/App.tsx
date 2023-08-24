import React from "react";
import { Routes, Route } from "react-router-dom";

import { LoginPage, SignupPage, ForgetPasswordPage } from "./Pages";
import { LoginLayout } from "./Layout";
import "./App.css";

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
        <Route
          path="/signup"
          element={
            <LoginLayout>
              <SignupPage />
            </LoginLayout>
          }
        ></Route>
        <Route
          path="/recover"
          element={
            <LoginLayout>
              <ForgetPasswordPage />
            </LoginLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
