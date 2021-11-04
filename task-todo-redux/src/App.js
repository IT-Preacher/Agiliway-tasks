import React from 'react';
import './App.scss';
import Todo from './components/TodoComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
