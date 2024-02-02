class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const genreList = this.shadowDOM.querySelector('.genre-list');
    genreList.addEventListener('click', this.handleGenreClick.bind(this));
  }

  handleGenreClick(event) {
    const target = event.target;
    if (target.classList.contains('genre-item')) {
      const genreValue = target.textContent;
      const genreSelectedEvent = new CustomEvent('genreSelected', {
        detail: { genreValue },
      });
      this.dispatchEvent(genreSelectedEvent);
    }
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>        
        :host {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: orange;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        h1 {
            padding: 16px;
        }

        .genre-list {
          margin-right: 32px;
          list-style: none;
          display: flex;
          font-size: large;
        }
        
        .genre-item {
          margin: 0 8px;
          text-decoration: underline 0.15em orange;
          transition: text-decoration-color 300ms;
        }

        .genre-item:hover {
          text-decoration-color: white;
          cursor: pointer;
        }

        @media screen and (max-width: 550px) {
          .genre-list {
            flex-direction: column;
            gap: 8px;
          }
        }
      </style>
      <h1>Movie Search Engine</h1>
      <div class="genre-list-container">
        <ul class="genre-list">
          <li class="genre-item">Action</li>
          <li class="genre-item">Drama</li>
          <li class="genre-item">Horror</li>
          <li class="genre-item">Comedy</li>
        </ul>
    `;
  }
}

customElements.define('app-bar', AppBar);