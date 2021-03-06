import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


 class ViewEmployee extends Component {
    constructor(props){
        super(props)
        this.state ={
            id:this.props.match.params.id,
            employee:{}
        }
    } 

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res =>{
            this.setState({employee: res.data});
        } )
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3"  style={{marginTop:"50px"}}>
                    <h3 className="text-center">View Employee</h3>
                    <div className="card-body">
                        <div className="row">
                            <label className="font-weight-bold">First Name :</label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label className="font-weight-bold">Last Name : </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label className="font-weight-bold">Email: </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewEmployee