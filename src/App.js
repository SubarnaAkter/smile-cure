
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div >
     <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/Home">
           <Home></Home>
         </Route>
         <Route exact path="/About">
           <About></About>
         </Route>
         <Route path="/*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
