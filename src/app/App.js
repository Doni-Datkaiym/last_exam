import React from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import Details from '../components/Details';
import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList'
import Footer from '../components/Footer';
import About from '../components/About';
import Contacts from '../components/Contacts';



const App = ({state}) => {
    console.log (state)
    return (
        <div>
             <header>
            <Navbar/>
           </header>
           <main>
            <div className="container border shadow-sm">
                <div className="banner-image">
                    <div className="banner">
                    <h1>Cinema</h1>
                    </div>
                </div>

                <div className="row">
                <Route path="/" exact>
                <MovieList/>
                </Route>
                <Route path="/About/" exact>
                    <About/>
                </Route>
                <Route path="/Contacts/" exact>
                    <Contacts/>
                </Route>


                <Route path="/films/:id" exact>
                    <Details/>
                </Route>

                    
                </div>
              
            </div>
            </main>
             
            <Footer/>
        </div>
    );
};
const msp = (state) => {
    return {state}
}

export default connect(msp)(App);