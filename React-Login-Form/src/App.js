//Import React and Components
import React, { Component } from 'react'; 

//import component
import LoginForm from './components/LoginForm';

//import CSS
import './App.css'

//Creating a class base component 
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

//Exporting our file
export default App;
