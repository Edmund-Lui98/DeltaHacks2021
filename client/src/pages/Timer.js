import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { Component } from "react";
import TaskList from "./TaskList";
import TimerStyle from "./design.css"; 
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";

class Timer extends Component {
    constructor(props) {
        super(props);
        const defaultStudyMinutes = 25;
        this.state = { //change studyMin and breakMin to PROPS when done timer class testing
            timerRunning: false,
            onStudy: true, //represents if the user is studying or on break
            studyMinutes: defaultStudyMinutes,
            breakMinutes: 5,
            minutes: defaultStudyMinutes,
            seconds: 0,
        }

        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer = () => {
        console.log("studyMins: " + this.state.studyMinutes);
        if (!this.state.timerRunning) {
            this.runTimer();
        }
        else if (this.state.timerRunning) {
            clearInterval(this.myInterval);
            this.setState(() => ({ timerRunning: false }));
        }
    }

    runTimer = () => {
        this.setState(() => ({ timerRunning: true }));
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
            if (this.state.minutes === 0 && this.state.seconds === 0) { //runs when timer is done
                clearInterval(this.myInterval);
                if (this.state.onStudy) {
                    this.setState((prevState) => ({
                        minutes: this.state.breakMinutes,
                        seconds: 0,
                        onStudy: false
                    }));
                    //add code in here regarding points/currency system
                } else if (!this.state.onStudy) {
                    this.setState((prevState) => ({
                        minutes: this.state.studyMinutes,
                        seconds: 0,
                        onStudy: true
                    }));
                }
                this.runTimer();
            }
        }, 1000)
    }

    resetTimer = () => {
        clearInterval(this.myInterval);
        this.setState((prevState) => ({
            timerRunning: false,
            minutes: this.state.studyMinutes,
            seconds: 0
        }));
    }

    onStudyMinsChange = (e) => { //user will need to press Reset button to change minutes
        const studyMinutes = e.target.value;
        this.setState(() => ({ studyMinutes }));
    }

    onBreakMinsChange = (e) => {
        const breakMinutes = e.target.value;
        this.setState(() => ({ breakMinutes }));
    }

    render() {

        return (

          <div>
            <Navbar></Navbar>
            <div className= "temp">
                <h1 className= "timer">{this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h1>
                <button className= "StartTimer" onClick={this.startTimer}>
                    Study</button>
                <button className= "EndTimer" onClick={this.resetTimer}>
                    Reset</button>
                <div className= "StudyTimer">
                    <p>Study Time:</p>
                    <input type="number" value={this.state.studyMinutes} onChange={this.onStudyMinsChange}></input>
                </div>
                <div className= "BreakTimer">
                    <p>Break Time:</p>
                    <input type="number" value={this.state.breakMinutes} onChange={this.onBreakMinsChange}></input>
                    </div>
                <TaskList></TaskList>
            </div>
            </div>

            
        )
    }
}

export default Timer;
