import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import { useSelector } from "react-redux";

function App() {
  const dataUser = useSelector((state: any) => state.user);
  console.log(dataUser);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ngueyenx mạnh hùng
        </a>
      </header>
    </div>
  );
}

export default App;
