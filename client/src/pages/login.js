import { FormControl, TextField, Button, Typography } from "@material-ui/core";

import React, { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    let status;
    fetch("/landing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "username": username, "password": password })
    })
      .then(res => {
        status = res.status;
        if (status < 500) return res.json();
        else throw Error("Server error");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <FormControl>
        <TextField
          label={"Username"}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField 
            label={"Password"}
            onChange={e => setPassword(e.target.value)}
        />
      </FormControl>
      <Button onClick={submitLogin}>Login</Button>
    </div>
  );
}

export default Login;
