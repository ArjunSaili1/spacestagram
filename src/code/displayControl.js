import {logo} from "../icons";

import {cards} from "./cards";

export const displayControl = (() => {

  const loadingAnimation = document.querySelector(".loading-animation");
  let feed;

  function showErrorCard() {
    feed.appendChild(cards.createErrorCard());
  }

  function showFeedCard(apodData) {
    feed.appendChild(cards.createFeedCard(apodData));
  }

  function createFeed() {
    const main = document.createElement('main');
    feed = document.createElement('div');
    feed.id = 'feed';
    main.appendChild(feed);
    document.body.appendChild(main);
  }

  function createLogoHeader() {
    const header = document.createElement("header");
    header.id = "main-header";
    const likedAPODAnchor = document.createElement('a');
    likedAPODAnchor.id = 'liked-apod-anchor';
    const likedAPODHeading = document.createElement('h3');
    likedAPODHeading.classList.add('page-btn');
    likedAPODHeading.id = 'liked-apod-text';
    likedAPODHeading.textContent = "Liked APODs";
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

  function createLoader() {
    loadingAnimation.remove();
    feed.appendChild(loadingAnimation);
  }

  async function removeLoader() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    loadingAnimation.remove();
  }

  return {createFeed, createLogoHeader, showFeedCard, createLoader, removeLoader, showErrorCard};
})();
