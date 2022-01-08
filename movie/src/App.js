import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Pages/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
       
       <Route path="/" component={Home} exact/>
       <Route path="/MovieDetails/:id" component={MovieDetails} exact />
       
      </Router>
     
    </div>
  );
}

export default App;
