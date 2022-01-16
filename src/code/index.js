import {displayControl} from "./displayControl";
import {apiLogic} from "./apiLogic";
import "./styles.css";

const App = (() => {

  function appStartup() {
    displayControl.createLogoHeader();
    displayControl.createFeed();
    newPost();
    newPost();
    window.addEventListener("scroll", updateFeed);
  }

  async function newPost() {
    const [newPostData, apiError] = await apiLogic.getRandomAPOD();
    if (apiError) {
      displayControl.showErrorCard();
    } else {
      displayControl.showFeedCard(newPostData);
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
