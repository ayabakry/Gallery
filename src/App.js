import { BrowserRouter,Route,Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Birthday from './Pages/Birthday';
import Wedding from './Pages/Wedding';
import Love from './Pages/Love';
import Friends from './Pages/Friends';


function App() {
  return (
   
    <BrowserRouter>
    <Switch>

     <Route exact path={"/"} component={Home}/>
     <Route exact path={"/signup"} component={SignUp}/>
     <Route exact path={"/birthday"} component={Birthday}/>
     <Route exact path={"/wedding"} component={Wedding}/>
     <Route exact path={"/love"} component={Love}/>
     <Route exact path={"/friends"} component={Friends}/>




  
    
     
</Switch>
   
    </BrowserRouter>
  );
}

export default App;
