import {apiLogic} from "./apiLogic";
import {mainDisplay} from "./display/mainDisplay";
import {cards} from "./display/cards";
import "./styles.css";
import {loaders} from "./display/loaders";

const App = (() => {

  let feed;

  function appStartup() {
    mainDisplay.createLogoHeader();
    mainDisplay.createFeed();
    loaders.createLoader();
    resetFeed();
    bindEvents();
  }

  function resetFeed() {
    mainDisplay.resetBtns();
    feed = mainDisplay.getFeed();
    feed.innerHTML = "";
    newPost();
    newPost();
    window.addEventListener("scroll", updateFeed);
    document.querySelector("#open-search-btn").addEventListener("click", openSearch);
  }

  function bindEvents() {
    document.querySelector("#liked-photo-button").addEventListener("click", openLikedPhotos);
    document.querySelector("#main-logo").addEventListener("click", resetFeed);
  }

  function openSearch(event) {
    const search = mainDisplay.createSearch(event);
    console.log(search.children)
    const searchBtn = document.querySelector(".search-btn");
    const closeBtn = search.children[1].children[0];
    const popUpBackground = search.children[0];
    popUpBackground.addEventListener("click", mainDisplay.resetBtns);
    searchBtn.addEventListener("click", callSearchAPI);
    closeBtn.addEventListener("click", mainDisplay.resetBtns);
  }

  async function callSearchAPI(event) {
    const dateValue = document.querySelector(".date-input").value
    document.querySelector(".search-btn").removeEventListener("click", callSearchAPI);
    if (dateValue) {
      feed.innerHTML = '';
      mainDisplay.resetBtns();
      window.removeEventListener("scroll", updateFeed);
      const [searchData, apiError] = await apiLogic.queryAPI(dateValue);
      if (apiError) {
        feed.appendChild(cards.createErrorCard());
      } else {
        searchData.likes = 0;
        feed.appendChild(cards.createFeedCard(searchData));
      }
    }
  }

  function openLikedPhotos(event) {
    window.removeEventListener("scroll", updateFeed);
    mainDisplay.setColor(event);
    const liked = cards.getLiked();
    for (let i = liked.length - 1; i > -1; i--) {
      feed.appendChild(cards.createFeedCard(liked[i]));
    }
  }

  async function newPost() {
    const [newPostData, apiError] = await apiLogic.getRandomAPOD();
    if (apiError) {
      feed.appendChild(cards.createErrorCard());
    } else {
      newPostData.likes = 0;
      feed.appendChild(cards.createFeedCard(newPostData));
    }
  }

  function updateFeed() {
    if (window.innerHeight + window.scrollY < document.body.scrollHeight) { return; }
    newPost();
    window.removeEventListener("scroll", updateFeed);
    setTimeout(function buffer() { window.addEventListener("scroll", updateFeed); }, 1000);
  }
  return {appStartup};
})();

App.appStartup();
