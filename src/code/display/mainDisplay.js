import {logo, heart, searchIcon} from "../../icons";

export const mainDisplay = (() => {

  let feed;
  let searchOpen = false;

  function createLogoHeader() {
    const header = document.createElement("header");
    header.id = "main-header";
    const likedPhotoButton = document.createElement('button');
    likedPhotoButton.id = 'liked-photo-button';
    likedPhotoButton.classList.add('page-btn');
    const likedPhotoImgContainer = document.createElement('div');
    likedPhotoImgContainer.id = 'liked-photo-logo';
    likedPhotoImgContainer.innerHTML += heart;
    likedPhotoButton.appendChild(likedPhotoImgContainer);
    const openSearchBtn = document.createElement('button');
    openSearchBtn.id = 'open-search-btn';
    openSearchBtn.classList.add("page-btn");
    const searchBtnContainer = document.createElement('div');
    searchBtnContainer.id = 'search-btn-container';
    searchBtnContainer.innerHTML += searchIcon;
    openSearchBtn.appendChild(searchBtnContainer);
    header.appendChild(likedPhotoButton);
    header.innerHTML += logo;
    header.appendChild(openSearchBtn);
    document.body.appendChild(header);
  }

  function createFeed() {
    const main = document.createElement('main');
    main.id = "main-content";
    feed = document.createElement('div');
    feed.id = 'feed';
    main.appendChild(feed);
    document.body.appendChild(main);
  }


  function getFeed() { return feed; }

  function createSearch(event) {
    searchOpen = true;
    event.target.style.color = "#fb8907";
    const overlay = document.createElement('div');
    overlay.classList.add("search-overlay-container");
    const popUpBackground = document.createElement("div");
    popUpBackground.classList.add("pop-up-back");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const closeBtnContainer = document.createElement("div");
    closeBtnContainer.classList.add("close-btn-container");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times";
    closeBtnContainer.appendChild(closeBtn);
    const dateSearchHeading = document.createElement("h3");
    dateSearchHeading.classList.add("enter-date-text");
    dateSearchHeading.textContent = "Please enter a seach date";
    const searchForm = document.createElement("form");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.min = "1995-06-16";
    const todayDate = new Date().toLocaleDateString("fr-CA");
    dateInput.max = todayDate;
    dateInput.classList.add("date-input");
    const searchBtn = document.createElement("button");
    searchBtn.textContent = "Search";
    searchBtn.type = "submit";
    searchBtn.classList.add("search-btn");
    searchForm.classList.add("search-form");
    searchForm.appendChild(dateInput);
    searchForm.appendChild(searchBtn);
    popUp.appendChild(closeBtnContainer);
    popUp.appendChild(dateSearchHeading);
    popUp.appendChild(searchForm);
    overlay.appendChild(popUpBackground);
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
      searchOpen = false;
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

  return {createLogoHeader, createFeed, createSearch, resetBtns, getFeed, setColor};
})();
