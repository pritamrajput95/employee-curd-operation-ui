
import React, { Component } from 'react';
import ListEmpComponents from './ListEmpComponents';
import EmployeeService from '../services/EmployeeService';

class UpdateEmpComponents extends Component {
    constructor(props){
        super(props)
        console.log("update emp component page is call");
        this.state={
         id:this.props.match.params.id,
         firstname:'',
         lastname :'',
         email:'',
         age: ''
        };

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        
        
    }
    
    componentDidMount(){
      EmployeeService.getEmployeebyId(this.state.id).then((res)=>{
        let employee=res.data;
        this.setState({firstname:employee.firstname,
                       lastname:employee.lastname,
                       email:employee.email,
                       age:employee.age
                    });
    });
        
         }

         updateEmployee=(e)=>{
          e.preventDefault();
          let employee ={firstname: this.state.firstname,
                         lastname: this.state.lastname,
                         email:this.state.email ,
                         age:this.state.age
  
                      };
                      console.log('employee => ' + JSON.stringify(employee));
                      console.log('id => ' + JSON.stringify(this.state.id));

                      EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                        this.props.history.push('/employees');
                    });   
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
   
   
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>update Employee from</h3>
                <div className='card-body'>
                <form>
                  <label>FirstName :</label>
                     <input placeholder='enter first name' name='firstname' className='form-control'
                     value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                  
                  <div>
                  <label>Last Name:</label>
                  <input
                    placeholder='Enter last name' name='lastname' className='form-control'
                    value={this.state.lastname}  onChange={this.changeLastNameHandler}   />
                </div>
                <div>
                  <label>Email ID:</label>
                  <input
                    placeholder='Enter email id'  name='email'  className='form-control'
                    value={this.state.email}   onChange={this.changeEmailHandler}   />
                </div>
                <div>
                  <label>Age:</label>
                  <input
                    placeholder='Enter age'  name='age'  className='form-control' 
                    value={this.state.age}  onChange={this.changeAgeHandler}    />
                </div>

            <div>
          <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
          </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmpComponents;