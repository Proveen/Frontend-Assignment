import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
     <Router>
       <HeaderComponent/>
         <div className="container">
           <Switch>   
              <Route path = "/" exact component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
           </Switch>
         </div>
       <FooterComponent />
     </Router>
    </div>

    
  );
}

export default App;
