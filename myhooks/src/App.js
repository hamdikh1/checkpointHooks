import {useState} from 'react'
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import {DataMovies} from './components/DataMovies'
import MovieList from './components/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
function App() {
  const[movie,setMovie] = useState(DataMovies)
  const[RateMovieSearch,setRateMovieSearch] = useState("")
  const[name,setName] = useState("")
  const Addfilm =(newmovie)=>{
  return setMovie([...movie , newmovie])
  }
  return (
    <div className="App">
    <NavBar  RateMovieSearch={RateMovieSearch} setRateMovieSearch={setRateMovieSearch}/>
     <MovieList movie={movie} RateMovieSearch={RateMovieSearch}  name={name}/>
     <AddMovie Addfilm={Addfilm}/>
    </div>
  );
}
export default App;
