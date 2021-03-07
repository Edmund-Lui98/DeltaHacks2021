import React, { Component } from "react";

class TaskItem extends Component {
    
    deleteTask = () => {

    }
    render() {
        return (
            <div>
                <h4>
                    {this.props.taskName}.....
                    {this.props.taskDuration}...
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