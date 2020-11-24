import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddMovie from './Components/AddMovie'
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="container mt-5">
      <AddMovie/>
      <Filter/>
     <MovieList/>
    </div>
  );
}

export default App;
