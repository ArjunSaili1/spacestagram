import {displayControl} from "./displayControl";
import {apiLogic} from "./apiLogic";
import "./styles.css";

const App = (() => {
  async function createFeed() {
    displayControl.createFeedCard(await apiLogic.getRandomAPOD());
    displayControl.createFeedCard(await apiLogic.getRandomAPOD());
    window.addEventListener("scroll", updateFeed);
  }

  async function updateFeed() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      displayControl.createFeedCard(await apiLogic.getRandomAPOD());
    }
  }
  return {createFeed};
})();

App.createFeed();
