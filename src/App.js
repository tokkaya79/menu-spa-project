import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <>
                <Router basename='/menu-spa-project'> 
            <Header />
            <main className="container content">
                    
                    <Routes>
                        {/* exact - чтобы дать точные указания пути  */}
                    <Route exact path="/" element={<Home />} /> 
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/category/:name" element={ <Category /> } />
                    <Route path="/meal/:id" element={ <Recipe /> } />
                    <Route  path='*' exact={true} element={ <NotFound />} />
                    </Routes>
                   

            </main>
            <Footer />
                </Router>
        </>
    );
}

export default App;
