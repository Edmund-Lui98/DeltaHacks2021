import React, { Component } from "react";

const TaskItem = (props) => {
    return (
        <div>
            <h3>{this.props.taskName}</h3>
            <span>{this.props.taskTime}</span>
            <button>Complete</button>
        </div>
    );
}

export default TaskItem;