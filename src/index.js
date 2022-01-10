import { displayControl } from "./displayControl";
import { apiLogic } from "./apiLogic";
const App = (()=>{
    async function createFeed() {
        await displayControl.createFeedCard(await apiLogic.getRandomAPOD());
        await displayControl.createFeedCard(await apiLogic.getRandomAPOD());
        window.addEventListener("scroll", updateFeed);
      }

    async function updateFeed(e){
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            await displayControl.createFeedCard(await apiLogic.getRandomAPOD());
          }
    }
    return {createFeed}
})()

App.createFeed();