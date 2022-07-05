import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Success from "./Pages/Success";
import Fail from "./Pages/Fail";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <LoginPage/>
        }
      />
      <Route
        exact
        path="/success"
        element={
          <Success />
        }
      />
      <Route
        exact
        path="/fail"
        element={
          <Fail />
        }
      />
      <Route
        exact
        path="*"
        element={
          <ErrorPage/>
        }
      />

    </Routes>
  );
}

export default App;
