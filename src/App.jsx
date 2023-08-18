import { useEffect } from 'react';
import axios from 'axios';
import { 
  BrowserRouter, 
  Routes,
  Route 
} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Layout from './pages/Layout';
import { Constants } from './helpers/constants';
import MovieDetail from './pages/MovieDetail';

function App() {
  useEffect(() => {
    const fetchCache = async () => {
      try {

        const { data } = await axios.get("genre/movie/list");
        localStorage.setItem(Constants.GenreCache, JSON.stringify(data.genres));
      
      } catch (err) {
        console.error(err)
      }
    };
    fetchCache();
}, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="search" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;