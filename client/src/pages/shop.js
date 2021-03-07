import { FormControl, TextField, Button, Typography, Avatar, CssBaseline, FormControlLabel, Checkbox, Link, Paper, Box, Grid} from "@material-ui/core";

import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";


// Probably global variables to store store bought items

function clickMeTreat() {
    alert("Bought Dog Treats");
}

function clickMeToy() {
    alert("Bought Dog Toy");
}

function clickMeHug() {
    alert("Giving hugs to the dog <3");
}

function shop() {


  return (
    <Grid 
    container 
    direction="column"
    display="flex"
    justify="center"
    alignItems="center"
    style={{height: "-50px"}}>
        <div 
        style= {{
            backgroundImage: 'url(https://i.imgur.com/0znECaC.png)',
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 1200}}>
            <Typography component="h1" variant="h8" align="center">
                Points: 
            </Typography>
            <img src="/Images/Neutral-Dog.png" alt="" margin-top="300px"/>
            <Button onClick = {clickMeTreat}
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
                Buy Treats
            </Button>

            <Button onClick = {clickMeToy}
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
                Buy Toy
            </Button>

            <Button onClick = {clickMeHug}
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
                Give Hug
            </Button>
        </div>
    </Grid>

  );
}

export default shop;
