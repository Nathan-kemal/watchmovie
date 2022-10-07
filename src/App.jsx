import React from 'react';
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";

function App(props) {
    return (
        <div>
            <Header/>
                  <Home/>
            <Footer/>
        </div>
    );
}

export default App;