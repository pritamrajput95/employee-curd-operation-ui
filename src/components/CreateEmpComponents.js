
import React, { Component } from 'react';
import ListEmpComponents from './ListEmpComponents';
import EmployeeService from '../services/EmployeeService';

class CreateEmpComponents extends Component {
    constructor(props){
        super(props)
        console.log("create emp component page is call");
        this.state={
         firstname:'',
         lastname :'',
         email:'',
         age: ''
        };

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.addEmployee=this.addEmployee.bind(this);
        
    }
    
    
    changeFirstNameHandler=(event)=>{
        this.setState({firstname:event.target.value});
    };

    changeLastNameHandler = (event) => {
    this.setState({ lastname: event.target.value });
    };

    changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
    };

    changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
    };
   
    addEmployee=(e)=>{
        e.preventDefault();
        let employee ={firstname: this.state.firstname,
                       lastname: this.state.lastname,
                       email:this.state.email ,
                       age:this.state.age

                    };
                    console.log('employee=> ', JSON.stringify(employee));
                
                    /*Navigate List page of the */
        EmployeeService.addEmployee(employee).then( res => {
          this.props.history.push('/employees');
  })
  .catch(error => {
    console.error("Error adding employee:", error);
    // Handle the error, e.g., show an error message to the user
  });
  
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
         <div>
          <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>Add Employee from</h3>
                <div className='card-body'>
                <form>
                   <label>FirstName :</label>
                     <input placeholder='enter first name' name='firstname' className='form-control'
                     value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                  
                  <div>
          <label>Last Name:</label>
          <input
            placeholder='Enter last name'
            name='lastname'
            className='form-control'
            value={this.state.lastname}
            onChange={this.changeLastNameHandler}
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            placeholder='Enter email id'
            name='email'
            className='form-control'
            value={this.state.email}
            onChange={this.changeEmailHandler}
        />
        </div>
        <div>
          <label>Age:</label>
          <input
            placeholder='Enter age'
            name='age'
            className='form-control'
            value={this.state.age}
            onChange={this.changeAgeHandler}
          />
        </div>

        <div>
          <button className='btn btn-success' onClick={this.addEmployee}>Save</button>
          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
          </div>
                </form>
                </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CreateEmpComponents;