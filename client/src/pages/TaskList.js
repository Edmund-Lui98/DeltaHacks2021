import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
    state = {
        tasks: [],
        error: undefined
    }

    addTask = (e) => {
        e.preventDefault();
        var taskNames = [];
        for (var i = 0; i < this.state.tasks.length; i++) {
            taskNames.push(this.state.tasks[i].taskName);
        }
        const taskToAdd = {
            taskName: e.target.elements.taskName.value,
            taskDuration: e.target.elements.taskDuration.value
        }
        if (taskToAdd.taskDuration < 0 || taskToAdd.taskDuration > 100) {
            this.setState(() => ({ error: "Duration is negative or too high (over 100mins)" }));
        } else if (!taskToAdd.taskName || !taskToAdd.taskDuration) {
            this.setState(() => ({ error: "Name or duration is blank" }));
        } else if (taskNames.indexOf(taskToAdd.taskName) > -1) {
            this.setState(() => ({ error: "Task already exists" })); //this.state.tasks.indexOf(taskToAdd) > -1
        } else {
            this.setState((prevState) => ({
                tasks: prevState.tasks.concat(taskToAdd),
                error: undefined
            }));
            e.target.elements.taskName.value = "";
            e.target.elements.taskDuration.value = "";
        }
    }

    completeTask = (taskToComplete) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskToComplete.taskName !== task.taskName)
          }));
          //add code in here regarding points system
          //if you want to make it based on the duration value, the duration value can be gotten via "taskToComplete.taskDuration" (is in minutes)
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
                            this.state.tasks.map((task) => (
                                <TaskItem 
                                    key={task.taskName}
                                    taskName={task.taskName}
                                    taskDuration={task.taskDuration}
                                    completeTask={this.completeTask}
                                />
                            ))
                        )
                }
                <form onSubmit={this.addTask}>
                    Task Name: <input type="text" placeholder="Input Name" name="taskName"></input>
                     Estimated Time (minutes): <input type="number" placeholder="Minutes" name="taskDuration"></input>
                    <button>Add Task</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

export default TaskList;