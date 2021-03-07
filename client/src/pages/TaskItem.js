import React, { Component } from "react";

class TaskItem extends Component {
    
    deleteTask = () => {

    }
    render() {
        return (
            <div className="taskItem">
                <h4 className="taskitemText">
                    {this.props.taskName}&nbsp;&nbsp;
                    {this.props.taskDuration}&nbsp;&nbsp;
                    <button onClick={(e) => {
                        this.props.completeTask({
                            taskName: this.props.taskName,
                            taskDuration: this.props.taskDuration
                        })
                    }}>Complete</button>
                </h4>
                
            </div>
        );
    }
}

export default TaskItem;