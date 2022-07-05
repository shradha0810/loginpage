/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const text = data.username + ":" + data.password;
    const encoded = window.btoa(text);
    fetch("http://localhost:8001/api/Audio/SearchPlayUserList", {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res) {
          return navigate("/success", {state:{id:1,data:res} })
        } else {
          return navigate("/fail");
        }
      });
  };
  return (
    <div className="App">
      <h3>LOGIN PAGE</h3>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="UserName"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <button type="submit" name="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        
      </div>
    </div>
  );
}

export default App;
