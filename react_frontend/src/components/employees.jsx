import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

 class employees extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
   constructor(props){
       super(props)
       this.state ={
           employee:[]
       }

       this.addEmployee = this.addEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
       this.viewEmployee = this.viewEmployee.bind(this);
       
   }

   viewEmployee(id){
    this.props.history.push(`/viewemployee/${id}`); 
   }

   deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res =>{
            this.setState({employee: this.state.employee.filter(employee => employee.id !== id)})
        })  
   } 

   componentDidMount(){
       EmployeeService.getEmployees().then((res)=>{
           this.setState({employee: res.data})
       });
   }

   addEmployee(){
       this.props.history.push("/addemployee/_add"); 
   }
   
   editEmployee(id){
      this.props.history.push(`/addemployee/${id}`);
   }

    render() {
        return (
            <div>
                <h2 className={"text-center"} style={{marginTop:"50px"}}>Employee List</h2>
                <div className="row">
                   <button className="btn btn-primary" onClick={this.addEmployee} style={{marginBottom:"30px"}}> + Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                           <tr>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Email Id</th>
                               <th>Actions</th>
                           </tr> 
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee=>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button  onClick={() => this.viewEmployee(employee.id)} className="btn btn-outline-success">View</button> 
                                            <button  onClick={() => this.editEmployee(employee.id)} className="btn btn-info" style={{marginLeft:"50px"}}>Update</button>
                                            <button  onClick={() => this.deleteEmployee(employee.id)} className="btn btn-warning" style={{marginLeft:"50px"}}>Delete</button> 
                                                                                       
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default employees



