
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListOfemployees from "./components/employees";
import FooterComponent from "./components/FooterComponent";
import Headercomponent from "./components/Headercomponent";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployee from './components/ViewEmployee';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div className="mainbody">
      <Router>     
          <Headercomponent/>
            <div  className="container">
              <Switch> 
                <Route path="/" exact component={ListOfemployees}></Route>
                <Route path="/employee" component={ListOfemployees}></Route>
                <Route path="/addemployee/:id" component={CreateEmployeeComponent}></Route>
                <Route path="/viewemployee/:id" component={ViewEmployee}></Route>
                {/* <Route path="/update/:id" component={UpdateEmployeeComponent}></Route> */}
              </Switch>
            </div>             
          <FooterComponent/>      
      </Router> 
    </div>
  );
}

export default App;
