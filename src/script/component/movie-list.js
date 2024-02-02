import './movie-item.js';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          width: 100%;
          padding: 24px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        movie-item:hover {
          cursor: pointer;
        }

        .movie-list-header {
          width: 100%;
          color: white;
          margin: 16px;
          border-bottom: 4px solid white;
          font-size: 32px;
        }

        .movie-list-header h3 {
          margin: 8px;
        }

        @media screen and (max-width: 550px) {
          .movie-list-header {
            text-align: center;
          }
          .movie-list-header {
            font-size: x-large;
          }
        }

      </style>
      <div class="movie-list-header">
        <h3>List of all found movies:</h3>
      </div>
    `;
    this._movies.forEach(movie => {
      const movieItem = document.createElement('movie-item');
      movieItem.movie = movie;
      this.shadowDOM.appendChild(movieItem);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .errorPlaceholder {
          color: white;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="errorPlaceholder">${message}</h2>`;
  }
}

customElements.define('movie-list', MovieList);