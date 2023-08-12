import React, { Component } from 'react';
import EmployeeService from  '../services/EmployeeService';
import CreateEmpComponents from './CreateEmpComponents';
import UpdateEmpComponents from './UpateEmpComponents';

class ListEmpComponents extends Component {
   
   
    constructor(props){
        super(props)
        console.log("list emp component page is call");
        this.state={
            employees:[]
        }
        this.addEmployee=  this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        
    }
   componentDidMount(){
    EmployeeService.getAllEmployees().then((res)=>{
        this.setState({ employees: res.data})
    })
   }
   addEmployee(){
   this.props.history.push('/add');
   }
   editEmployee(id){
    this.props.history.push('/update/${id}');
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    render() {
        return (
            <div>
              <h2 className='text-center'>Employee List </h2> 

             <div>
              <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee </button>
             </div>

              <div className='row' >
              <table className='table table-striped table-bordered' >
              <thead> 
                <tr className='text-center'>
                    <th>FirstName </th>
                    <th>LastName </th>
                    <th>Email </th>
                    <th>Age</th>
                    <th>Actions</th>

                </tr>
              </thead>

              <tbody className='text-center'>
                   { this.state.employees.map(
                        (employee)=>(
                          <tr key={employee.id}>
                          <td>{employee.firstname}</td>
                          <td>{employee.lastname}</td>
                          <td>{employee.email}</td>
                          <td>{employee.age}</td>
                          <td>

                        <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info"> Update</button>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                          </td>
                        </tr>
                    ))}

              </tbody>
              </table>

                
                </div> 

            </div>
        );
    }
}

export default ListEmpComponents;