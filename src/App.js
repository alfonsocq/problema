import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Lista from "./components/Lista"
import Hoshino from "./components/Hoshino"
import Linker from "./components/Linker"


function App() {


  return (
    
    <div className="container">
      <p>Testeando</p>
        
          
      <BrowserRouter>
        
        <Link to="/" className="btn btn-success">Home</Link>
        <Link to="/lista" className="btn btn-success">Lista</Link>
        
        

        <Switch>                  
          <Route path="/" exact render={() =>  <Hoshino />} />                
          <Route path={"/lista"} exact render={() => <Lista />} />
        </Switch>    
      </BrowserRouter>
          
      <p>Raaa</p>
    </div>
  );
}


export default App;

