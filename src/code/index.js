import {displayControl} from "./displayControl";
import {apiLogic} from "./apiLogic";
import "./styles.css";

const App = (() => {

  let errored = false;

  function createFeed() {
    newPost();
    newPost();
    window.addEventListener("scroll", updateFeed);
  }

  async function newPost(){
    const [newPostData, apiError] = await apiLogic.getRandomAPOD();
    if(!errored){
      if(apiError){
        displayControl.createErrorCard();
        errored = true;
      }
      else{
        displayControl.createFeedCard(newPostData);
      }
    }
  }

  function updateFeed() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      newPost();
    }
  }
  return {createFeed};
})();

App.createFeed();
