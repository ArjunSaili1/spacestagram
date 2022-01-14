import {displayControl} from "./displayControl";
import {apiLogic} from "./apiLogic";
import "./styles.css";

const App = (() => {

  function appStartup() {
    displayControl.createLogoHeader();
    displayControl.createFeed();
    displayControl.createLoader();
    newPost();
    newPost();
    window.addEventListener("scroll", updateFeed);
  }

  async function newPost() {
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
      window.removeEventListener("scroll", updateFeed);
      displayControl.createLoader();
      setTimeout(function timeOut(){window.addEventListener("scroll", updateFeed)}, 100)
    }
  }
  return {appStartup};
})();

App.appStartup();
