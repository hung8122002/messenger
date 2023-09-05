import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map(
          (
            { path, component: Component, layout: Layout }: any,
            index: number
          ) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            ></Route>
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
