import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Pages/Footer';
import FavPage from './Pages/FavPage';
import {langContext} from './Context/LangContext'
import { useState } from 'react';




function App() {
  const [contextLang , setContextLang ] = useState("en");
  
 
  return (
   
    <div className="App">
       <div className={contextLang === "ar" ? "text-right" : "text-left"} dir={contextLang === "ar" ? "rtl" : "ltr"}>

      <langContext.Provider value={{contextLang , setContextLang }}>
      <Router>
      <NavBar />
       
       <Route path="/" component={Home} exact/>
       <Route path="/MovieDetails/:id" component={MovieDetails} exact />
       <Route path="/FavPage" component={FavPage} exact/>       
      </Router>
      </langContext.Provider>
      </div>
    </div>
  );
}

export default App;
