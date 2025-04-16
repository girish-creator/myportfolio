import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Certification } from "./components/Certification";
import Elt from './pages/Elt';
import Fullstack from './pages/Fullstack';

export const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <NavBar />
                    <Banner />
                    <Skills />
                    <Projects />
                    <Certification />
                    <Contact />
                    <Footer />                
                </Route>
                <Route path="/elt" component={Elt} exact />
                <Route path="/fullStack" component={Fullstack} exact />
            </Routes>
        </Router>
    );
};

