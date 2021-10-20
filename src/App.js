import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';


import Header from './Components/Header/Header';
import About from './Components/About/About';
import Physician from './Components/Physician/Physician';

import Signup from './Components/Signup/Signup';

import Services from './Components/Services/Services';
import Notfound from './Components/Notfound/Notfound';
import Detail from './Components/Detail/Detail';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';








function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>

              <Banner></Banner>
              <Footer></Footer>
            </Route>
            <Route path='/home'>

              <Banner></Banner>
              <Footer></Footer>
            </Route>
            <Route path='/services'>
              <Services></Services>

            </Route>
            <Route path='/about'>
              <About></About>


            </Route>
            <Route path='/physician'>
              <Physician></Physician>

            </Route>
            <Route path='/signup'>
              <Signup></Signup>

            </Route>
            <PrivateRoute path='/detail/:serviceId'>
              <Detail></Detail>

            </PrivateRoute>




            <Route exact path='*'>
              <Notfound></Notfound>

            </Route>

          </Switch>


        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
