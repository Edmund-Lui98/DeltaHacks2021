import { FormControl, TextField, Button, Typography, Avatar, CssBaseline, FormControlLabel, Checkbox, Link, Paper, Box, Grid, colors} from "@material-ui/core";

import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import SignUp from "./signup";
import { Route, useHistory } from "react-router-dom";
import color from "@material-ui/core/colors/amber";


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    image: {
      backgroundImage: 'url(/Picture.png)',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    let status;
    fetch("/login", {
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

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitLogin}
              href='/main'
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link href="./signup.js" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                <Link href="./signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
