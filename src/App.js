import React from "react";
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import './App.css'
import Vedios from "./components/Vedios";
import {BrowserRouter as Router,Switch,Route,Link,NavLink,BrowserRouter} from "react-router-dom";
import Notfound from "./components/Notfound";
import Search from "./components/Search";


function App() {
  return (
    <div className='app'>
     <BrowserRouter>
     <Header />

     <div className="app-page container">
            <Sidebar />

           
           <Switch>

             <Route exact path="/">
            <Vedios/>
           </Route>

            
        <Route
       path='/search/:q'
       render={props => <Search {...props} />}
       component={Search}
     />
 
       <Route><Notfound/></Route>

       </Switch>

     </div>


     </BrowserRouter>
    </div>
  );
}

export default App;