class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    const poster = this._movie.poster_path;
    this._image = poster 
    ? `https://image.tmdb.org/t/p/w1280${poster}`
    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAMFBMVEXU1NT////R0dHp6enn5+fZ2dnv7+/e3t77+/v29vbi4uLj4+Pr6+vW1tbc3Nzz8/PpqbQiAAADKklEQVR4nO3c25KiMBSF4RhAlIO+/9s2Im3bZAdhqmayds3/XXWVN6vS250TGAIAAAAAAAAAAAAAAAAAAAAAAAAAAIAzMcbSEY6Y4sbx1vV1XVV1391GB/mnhO1wv5x+uw6tdPTYDNdTxr0VTR5DvR7nlVoweRzP26FnvVryOOxI/aj0USl5bPelfuiEgu8pkZezTPDuSOyps6gEjx/6iGzwA+U9G0SCx+xsk9GWTrxoDuY+lQ68iPeDuVWayuEBH0snfoqHWrjQgI/voS5DOy+6m67KfmNLB168LVDOzc9ie/qrtnN3JdO+W/Lc1yunaNeQyuQTq+cwGnGWj1ZEcoc4ZblmPrLapEhHCbHON4nRyK0yZ07Bs/96a8D7f5ntTxlL3UqlwLcY86nKonCb09zRaW5jvF3U981nP7FmTJn+vcHaOTelQ+1gbZwdlLe1b746yG0dDHlog0bs0610qI/MVexFfrhjbw23/qxjH1GUTvWZGVt+uO2zWvnqzhzAqTeTzDGWeu+2DyDkp0q7A8r3ktwtm/pCMHO2rHrf/WLHVrq/tGQu2RTv6N9lGrd8bPvUWz22tX/3ENv+TsrHtotb7uGThPmggfxoW4eBLmJbvUR9CRjs4Va5PdtirALl9zfBnuBV7s62GMtAF0ev6RN5Ks8QbDLOMEtH2ieJLX9WMks3Z6UT7ZNMOi6q2zgx8dBMrKWgi+FO24mHGT4Ys6WDBdVDklvmOaptSW71o9dFUt8ellTB6INOcid7Sy+51+sTJ/WdTDweHteYrQrFx/IkJNti9UuRl3VH8ZI7NEP1ZnDTUOYXMH+UTgMA+A9M082tbRtns05szss286p+Hf/L+8rqIv/8w7f1wb2TE5T0vsHF1sF6xUj/7jLzqrH6o0m5d+nlN2u5N7vVB9yqbg89JfPEoHqh5H9ORDx39rVucv8NXusk99K5+vcy+3sL6kuU3E+4yF++2oWi/7yPPeDyw21XuHp1P8R0RajeTJ6S4E5u6Kfd/K8ad7DZ+Ra71zJ8kPpBto9iaOuq7r0d/MwcRgYAAAAAAAAAAAAAAAAAAAAAAAAAAJh9AU1lEo9xQaqzAAAAAElFTkSuQmCC';
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          width: 300px;
          aspect-ratio: 1 / 0.7;
          border-radius: 8px;
          margin: 16px;
          position: relative;
        }
        
        :host .movie-image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: 0.5s ease-in-out;
          box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
        }

        :host(:hover) .movie-image-box img {
          filter:
              grayscale(1)
              brightness(0.4);
        }

        .movie-content {
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .movie-image-box {
          border: 8px solid darkorange;
        }
        
        .movie-content h2,
        .movie-content p {
          opacity: 0;
          transition: 0.4s 0.2s ease;
        }
        .movie-content h2 {
            color: white;
          margin-bottom: 12px;
          scale: 0.7;
        }
        .movie-content p {
          font-size: 14px;
          color: white;
          transform: translateY(50%);
        }

        :host(:hover) .movie-content h2 {
          scale: 1;
          opacity: 1;
        }
          
        :host(:hover) .movie-content p {
          opacity: 1;
          transform: translateY(0);
        }

      </style>
      <div class="movie-image-box">
      <img src="${this._image}" alt="Movie Poster">
      </div>
      <div class="movie-content">
        <h2>${this._movie.title}</h2>
        <p>${this._movie.overview}</p>
      </div>
    `
  }
}

customElements.define('movie-item', MovieItem);