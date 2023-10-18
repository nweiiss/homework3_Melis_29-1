import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskText: ''
    };
  }

  inputChange = (e) => {
    this.setState({ taskText: e.target.value });
  };

  handleClick = () => {
    const { taskText, tasks } = this.state;
    if (taskText.trim() !== '') {
      this.setState({
        tasks: [...tasks, taskText],
        taskText: ''
      });
    } 
  };

  render() {
    const { tasks, taskText } = this.state;

    return (
      <div className="App">
        <h1>Список задач</h1>
        <div>
          <input
            type="text"
            value={taskText}
            onChange={this.inputChange}
            placeholder="Добавить задачу"
          />
          <button onClick={this.handleClick}>Добавить</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
