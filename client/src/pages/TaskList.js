import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
    state = {
        tasks: [],
        error: undefined
    }

    addTask = (e) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.concat(e.target.elements.taskDuration.value)
          }));
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                {
                    this.state.tasks.length === 0 ? (
                        <div>
                            <span>No Tasks</span>
                        </div>
                    ) : (
                            this.state.tasks.map((task) => {
                                return <TaskItem {...task} />; 
                            })
                        )
                }
                <form onSubmit={this.addTask}>
                    Task Name: <input type="text" placeholder="Input Name" name="taskDuration"></input>
                     Estimated Time (minutes): <input type="number" placeholder="Minutes" name="taskDuration"></input>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default TaskList;