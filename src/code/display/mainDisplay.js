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

  function createSearchOverlay(e){
    e.target.style.color = "green";
    const overlay = document.createElement('div');
    overlay.classList.add("search-overlay-container");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-time-info");
    const dateSearchHeading = document.createElement("h3");
    dateSearchHeading.classList.add("enter-date-text");
    dateSearchHeading.textContent = "Please enter a seach date";
    const searchForm = document.createElement("form");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("date-input");
    const searchBtn = document.createElement("button");
    searchBtn.type = "submit";
    searchBtn.textContent = "Search";
    searchBtn.classList.add("search-btn");
    searchForm.classList.add("search-form")
    searchForm.appendChild(dateInput);
    searchForm.appendChild(searchBtn);
    dateContainer.appendChild(dateSearchHeading);
    dateContainer.appendChild(searchForm);
    popUp.appendChild(dateContainer);
    overlay.appendChild(popUp)
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
  }

  return {createLogoHeader, createFeed, createSearchOverlay, getFeed};
})();
