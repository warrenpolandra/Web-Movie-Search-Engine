class DataSource {
  static searchMoviesByKeyword(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2Y4ZTY0MjA1NjU3NzNlYTZhMzllNmQwNjMzNTU5MSIsInN1YiI6IjY0ZDdhOThmYjZjMjY0MTE1NzUzYTZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZxUJg40Y1xP0it-oh9BOEA1qifThEQArwHBPq3FpdE'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.results.length > 0) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`No movie found with "${keyword}" keyword`);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  static searchMovieByGenre(genreName) {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2Y4ZTY0MjA1NjU3NzNlYTZhMzllNmQwNjMzNTU5MSIsInN1YiI6IjY0ZDdhOThmYjZjMjY0MTE1NzUzYTZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZxUJg40Y1xP0it-oh9BOEA1qifThEQArwHBPq3FpdE'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      const genre = responseJson.genres.find(genre => genre.name === genreName);
      if (genre) {
        return genre.id;
      }
    })
    .then(genreId => {
      return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2Y4ZTY0MjA1NjU3NzNlYTZhMzllNmQwNjMzNTU5MSIsInN1YiI6IjY0ZDdhOThmYjZjMjY0MTE1NzUzYTZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZxUJg40Y1xP0it-oh9BOEA1qifThEQArwHBPq3FpdE'
        }
      })
    })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.results.length > 0) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`No "${genreName}" movie found`);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export default DataSource;