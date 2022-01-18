import {logo} from "../../icons";

export const mainDisplay = (() => {

  let feed;
  let searchOpen = false;

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
    const openSearchBtn = document.createElement('button');
    const searchBtnHeading = document.createElement('h3');
    openSearchBtn.id = 'open-search-btn';
    searchBtnHeading.id = 'search-btn-heading';
    searchBtnHeading.classList.add("page-btn");
    searchBtnHeading.textContent = "Search by date";
    openSearchBtn.appendChild(searchBtnHeading);
    header.appendChild(likedAPODAnchor);
    header.innerHTML += logo;
    header.appendChild(openSearchBtn);
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

  function createSearchOverlay(event) {
    searchOpen = true;
    event.target.style.color = "#fb8907";
    const overlay = document.createElement('div');
    overlay.classList.add("search-overlay-container");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const closeBtnContainer = document.createElement("div");
    closeBtnContainer.classList.add("close-btn-container");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times";
    closeBtnContainer.appendChild(closeBtn);
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-time-info");
    const dateSearchHeading = document.createElement("h3");
    dateSearchHeading.classList.add("enter-date-text");
    dateSearchHeading.textContent = "Please enter a seach date";
    const searchForm = document.createElement("form");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.min = "1995-06-16";
    const todayDate = new Date().toLocaleDateString("fr-CA");;
    dateInput.max = todayDate;
    dateInput.classList.add("date-input");
    const searchBtn = document.createElement("button");
    searchBtn.textContent = "Search";
    searchBtn.type = "submit";
    searchBtn.classList.add("search-btn");
    searchForm.classList.add("search-form");
    searchForm.appendChild(dateInput);
    searchForm.appendChild(searchBtn);
    dateContainer.appendChild(dateSearchHeading);
    dateContainer.appendChild(searchForm);
    popUp.appendChild(closeBtnContainer);
    popUp.appendChild(dateContainer);
    overlay.appendChild(popUp);
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
    return overlay;
  }

  function closeSearch() {
    document.body.style.overflow = 'unset';
    document.querySelector(".search-overlay-container").remove();
  }

  function resetBtns() {
    if (searchOpen) {
      closeSearch();
    }
    const pageBtns = document.querySelectorAll(".page-btn");
    for (let i = 0; i < pageBtns.length; i++) {
      pageBtns[i].style.color = "unset";
    }
  }

  function setColor(event) {
    feed.innerHTML = '';
    event.target.style.color = '#fb8907';
  }

  return {createLogoHeader, createFeed, createSearchOverlay, resetBtns, getFeed, setColor};
})();
