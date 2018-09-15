//Importing React and Components
import React, { Component } from 'react';

//Creating class base component
class LoginForm extends Component{
    state= {
            Username: '', 
            Password: ''
    };
    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = e => {
        if(e.target.parentElement.classList.contains("input_wrapper")){
            e.target.parentElement.classList.add("open");
            
        }
    }
    
    
    render(){
        return(
            <div className='wrapper'>
                <form onSubmit={ this.handleSubmit }>
                    <h3>Sign In</h3>
                    <div className='input_wrapper' tabIndex='1'>
                        <label htmlFor="Username">Email ID</label>
                        <input type="email" id="Username" onChange={ this.handleChange } onClick={ this.handleClick } />
                    </div>
                    <div className='input_wrapper' tabIndex='1'>
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" onChange={ this.handleChange } onClick={ this.handleClick }/>
                    </div>
                    <div className='forgot_password'>
                        <a href="">Forgot Password</a>
                    </div>
                    <button className='submit'>Login</button>
                </form>
                <div>Username:{(this.state).Username}</div> <br />
                <div>Password:{(this.state).Password}</div>
            </div>
            
        )
    }
}

//Exporting our file
export default LoginForm;


