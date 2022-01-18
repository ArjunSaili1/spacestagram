import {apiLogic} from "./apiLogic";
import {mainDisplay} from "./display/mainDisplay";
import {cards} from "./display/cards";
import "./styles.css";

const App = (() => {

  let feed;

  function appStartup() {
    mainDisplay.createLogoHeader();
    mainDisplay.createFeed();
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
  }

  function bindEvents() {
    document.querySelector("#liked-apod-text").addEventListener("click", openLikedPhotos);
    document.querySelector("#search-btn").addEventListener("click", (event) => {
      mainDisplay.createSearchOverlay(event);
      document.querySelector(".search-form").addEventListener("submit", callSearchAPI);
      document.querySelector(".close-btn").addEventListener("click", mainDisplay.resetBtns);
    });
    document.querySelector("#main-logo").addEventListener("click", resetFeed);
  }

  async function callSearchAPI(event) {
    event.preventDefault();
    const dateValue = event.path[0].children[0].value;
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
    setTimeout(function buffer() { window.addEventListener("scroll", updateFeed); }, 500);
  }
  return {appStartup};
})();

App.appStartup();
