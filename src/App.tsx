import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/Login";
import { LoginLayout } from "./Layout";

function App() {
  const dataUser = useSelector((state: any) => state.user);
  console.log(dataUser);

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
