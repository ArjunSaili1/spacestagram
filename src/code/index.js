import {displayControl} from "./displayControl";
import {apiLogic} from "./apiLogic";
import "./styles.css";

const App = (() => {

  function createFeed() {
    newPost();
    newPost();
    window.addEventListener("scroll", updateFeed);
  }

  async function newPost() {
    setTimeout(1000);
    displayControl.createLoader();
    const [newPostData, apiError] = await apiLogic.getRandomAPOD();
    if (apiError) {
      displayControl.createErrorCard();
    } else {
      displayControl.createFeedCard(newPostData);
    }
  }

  function updateFeed() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      newPost();
    }
  }
  return {createFeed};
})();

App.createFeed();
