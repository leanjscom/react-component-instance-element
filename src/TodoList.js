import React, {Component} from 'react'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { name: "Learn more advanced React" }
      ],
      newTask: ''
    }
    this.addTask = this.addTask.bind(this)
    this.inputChanged = this.inputChanged.bind(this)
  }

  inputChanged(event) {
    this.setState({ newTask: event.target.value })
  }

  addTask() {
    let tasks = { tasks: [...this.state.tasks, { name: this.state.newTask }], newTask: '' }
    this.setState(tasks)
  }

  render() {
    let tasksComponents = this.state.tasks.map((task, index) => (<ListItem task={task.name} key={index} />) )
    let newTaskInput = <input ref="txt" type="text" onChange={this.inputChanged}/>
    let newTaskAddButton = <button onClick={this.addTask}>Add new Product</button>

    return (
      <div>
        <ul>
          {tasksComponents}
        </ul>
        {newTaskAddButton}
        {newTaskInput}
      </div>
    )
  }
}

export const ListItem = props => (
    <li>
      {props.task}
    </li>
)

export default TodoList
