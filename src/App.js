
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import NotFound from './NotFound/NotFound';
import Footer from './Componants/Footer/Footer';
import ServiceDetails from './Componants/Home/ServiceDetails/ServiceDetails';
import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import AuthProvider from './Componants/Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Services from './Componants/Services/Services';

function App() {
  return (
    <div>
        <AuthProvider>
     <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/Home">
           <Home></Home>
         </Route>
         <PrivateRoute exact path="/Service/:serviceId">
           <ServiceDetails></ServiceDetails>
         </PrivateRoute>
         <Route exact path="/About">
           <About></About>
         </Route>
         <PrivateRoute exact path="/Services">
           <Services></Services>
         </PrivateRoute>
         <Route exact path="/Login">
           <Login></Login>
         </Route>
         <Route exact path="/Register">
         <Register></Register>
         </Route>
         
           
        
         <Route path="/*">
           <NotFound></NotFound>
         </Route>
         
       </Switch>
       <Footer></Footer>
     </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
