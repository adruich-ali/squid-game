import React from 'react'
import {Article, Cta, Brand, Feature, Navbar } from './components/index';
import {Footer, Blog, Features,Header, Possibility,Whatsquid} from './containers/index';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatsquid />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
