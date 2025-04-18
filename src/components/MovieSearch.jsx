// MovieSearch.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { MovieContext } from '../context/MovieProvider';
import "react-multi-carousel/lib/styles.css";

// Cùng responsive như MovieList
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
  desktop: { breakpoint: { max: 3000, min: 1200 }, items: 8 },
  tablet: { breakpoint: { max: 1200, min: 600 }, items: 3 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 2 },
};

const MovieSearch = ({ title, data, theme }) => {
  const { handleTrailer } = useContext(MovieContext);
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className={`p-10 mb-10 ${textColor}`}>
      <h2 className={`uppercase text-xl mb-4 ${textColor}`}>{title}</h2>
      <Carousel responsive={responsive} className="flex justify-center items-center space-x-4">
        {data && data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute bottom-4 left-2">
                  <p className={`uppercase text-md ${textColor}`}>
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
  theme: PropTypes.string.isRequired,
};

export default MovieSearch;
