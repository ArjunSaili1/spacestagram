import {logo} from "../../icons";

export const mainDisplay = (() => {

  let feed;

  function createLogoHeader() {
    const header = document.createElement("header");
    header.id = "main-header";
    const likedAPODAnchor = document.createElement('button');
    likedAPODAnchor.id = 'liked-apod-anchor';
    const likedAPODHeading = document.createElement('h3');
    likedAPODHeading.classList.add('page-btn');
    likedAPODHeading.id = 'liked-apod-text';
    likedAPODHeading.textContent = "Liked Photos";
    likedAPODAnchor.appendChild(likedAPODHeading);
    const searchAnchor = document.createElement('a');
    searchAnchor.id = 'search-anchor';
    const searchDateText = document.createElement('h3');
    searchDateText.classList.add("page-btn");
    searchDateText.textContent = "Search by date";
    searchAnchor.appendChild(searchDateText);
    header.appendChild(likedAPODAnchor);
    header.innerHTML += logo;
    header.appendChild(searchAnchor);
    document.body.appendChild(header);
  }

  function createFeed() {
    const main = document.createElement('main');
    feed = document.createElement('div');
    feed.id = 'feed';
    main.appendChild(feed);
    document.body.appendChild(main);
  }


  function getFeed() { return feed; }

  return {createLogoHeader, createFeed, getFeed};
})();
