import {apiLogic} from "./apiLogic";
import {mainDisplay} from "./display/mainDisplay";
import {cards} from "./display/cards";
import "./styles.css";

const App = (() => {

  let feed;

  function appStartup() {
    mainDisplay.createLogoHeader();
    mainDisplay.createFeed();
    feed = mainDisplay.getFeed();
    newPost();
    newPost();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("scroll", updateFeed);
    document.querySelector("#liked-apod-text").addEventListener("click", openLikedPhotos);
    document.querySelector("#search-btn").addEventListener("click", (e)=>{
      mainDisplay.createSearchOverlay(e)
    document.querySelector(".search-form").addEventListener("submit", callSearchAPI);
    document.querySelector(".close-btn").addEventListener("click", mainDisplay.closeSearch);
  });
  }

  async function callSearchAPI(e){
    e.preventDefault();
    const dateValue = e.path[0].children[0].value;
    if(dateValue){
      feed.innerHTML = '';
      mainDisplay.closeSearch(e);
      const [searchData, apiError] = await apiLogic.queryAPI(dateValue);
      window.removeEventListener("scroll", updateFeed);
      if (apiError) {
        feed.appendChild(cards.createErrorCard());
      }
      else{
        searchData.likes = 0;
        feed.appendChild(cards.createFeedCard(searchData));
      }
    }
  }

  function openLikedPhotos(event) {
    window.removeEventListener("scroll", updateFeed);
    const oldCards = [...feed.children]
    event.target.removeEventListener("click", openLikedPhotos);
    event.target.addEventListener("click", ()=>{
      event.target.style.color = "unset";
      remakeFeed(oldCards)});
    feed.innerHTML = '';
    event.target.style.color = 'green';
    const liked = cards.getLiked();
    for (let i = 0; i < liked.length; i++) {
      feed.appendChild(cards.createFeedCard(liked[i]));
    }
  }

  function remakeFeed(cards){
    feed.innerHTML = '';
    for(let i = 0; i < cards.length; i++){
      feed.appendChild(cards[i]);
    }
    bindEvents();
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
