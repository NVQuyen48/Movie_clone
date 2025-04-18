// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Login from './components/Login';
import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword'; // Nếu bạn tạo thêm component này
import { MovieProvider } from './context/MovieProvider';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [theme, setTheme] = useState('dark'); // mặc định là dark mode

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      console.log(data.results);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=2';
      const [res1, res2] = await Promise.all([fetch(url1, options), fetch(url2, options)]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <MovieProvider>
      <BrowserRouter>
        {/* Container áp dụng nền chung; các component con tự điều chỉnh màu text theo prop theme */}
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          {/* Header dùng chung cho các trang có thể có (có thể giữ Header trên tất cả các route hoặc chỉ trang chủ tuỳ nhu cầu) */}
          <Header onSearch={handleSearch} onToggleMode={toggleTheme} theme={theme} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {movieSearch.length > 0 ? (
                    <MovieSearch title="Kết Quả Tìm Kiếm" data={movieSearch} theme={theme} />
                  ) : (
                    <>
                      <MovieList title="Phim Hot" data={movie} theme={theme} />
                      <MovieList title="Phim Đề Cử" data={movieRate} theme={theme} />
                    </>
                  )}
                </>
              }
            />
            <Route path="/login" element={<Login theme={theme} />} />
            <Route path="/register" element={<Register theme={theme} />} />
            {/* Nếu có:  
            <Route path="/forgot-password" element={<ForgotPassword theme={theme} />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
