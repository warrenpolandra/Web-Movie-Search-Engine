class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.attachIcon();
  }

  attachIcon() {
    const iconLink = document.createElement('link');
    iconLink.setAttribute('rel', 'stylesheet');
    iconLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    this.shadowDOM.appendChild(iconLink);
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          width: 100%;
          height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        :host h1 {
          color: white;
          font-size: 80px;
          text-align: center;
        }

        .search-bar-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
    
        .search-bar {
          width: 60%;
          display: flex;
          border: 4px solid darkorange;
          border-radius: 32px;
          padding: 8px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-color: white;
        }
    
        .search-bar > input {
          width: 100%;
          border: 0;
          font-size: x-large;
          padding: 8px;
          background-color: transparent;
        }
    
        .search-bar > input:focus {
          outline: 0;
        }
    
        .search-bar > button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0 4px;
          padding: 8px;
          cursor: pointer;
          font-weight: bold;
          color: white;
          background-color: orange;
          border: 2px solid darkorange;
          border-radius: 24px;
          font-size: large;
        }
    
        .search-bar > button > i {
          margin: 0 8px 0 0;
        }

        @media screen and (max-width: 550px) {
          .search-bar {
            flex-direction: column;
          }

          :host h1 {
            font-size: 40px;
          }
          
          .search-bar > input {
            width: 100%;
            font-size: medium;
            border-bottom: 1px solid darkorange;
            margin-bottom: 4px;
          }
        }
      </style>
      <h1>Movie Search Engine</h1>
      <div id="search-bar-container" class="search-bar-container">
        <div class="search-bar">
          <input placeholder="Search Any Movie Name" type="search" id="searchElement">
          <button id="searchButtonElement" type="submit">
            <i class="fa fa-search"></i>Search
          </button>
        </div>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
};

customElements.define('search-bar', SearchBar);