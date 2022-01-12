import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Pages/Footer';
import FavPage from './Pages/FavPage';




function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
       
       <Route path="/" component={Home} exact/>
       <Route path="/MovieDetails/:id" component={MovieDetails} exact />
       <Route path="/FavPage" component={FavPage} exact/>       
      </Router>
     
    </div>
  );
}

export default App;
