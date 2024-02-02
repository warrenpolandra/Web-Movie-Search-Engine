import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/movie-list.js';
import '../component/app-bar.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const appBarElement = document.querySelector('app-bar');

  const onSearchClicked = () => {
    DataSource.searchMoviesByKeyword(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult);
  }

  const renderResult = result => {
    movieListElement.movies = result;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onSearchClicked;
  appBarElement.addEventListener('genreSelected', (event) => {
    const genre = event.detail.genreValue;
    DataSource.searchMovieByGenre(genre)
    .then(renderResult)
    .catch(fallbackResult);
  });
};

export default main;