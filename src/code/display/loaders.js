import {mainDisplay} from "./mainDisplay";
import { earth } from "../../icons";
import { rocket } from "../../icons";

export const loaders = (() => {

  let loadingAnimationContainer;

  function createLoader() {
    loadingAnimationContainer = document.createElement("div");
    loadingAnimationContainer.classList.add("loading-animation");
    const orbit = document.createElement("div");
    orbit.classList.add("orbit");
    const earthImg = document.createElement("img");
    earthImg.classList.add("earth");
    earthImg.src = earth;
    const rocketImg = document.createElement("img");
    rocketImg.classList.add("rocket");
    rocketImg.src = rocket;
    orbit.appendChild(earthImg);
    orbit.appendChild(rocketImg);
    loadingAnimationContainer.appendChild(orbit);
  }

  function showLoader(){
    mainDisplay.getFeed().appendChild(loadingAnimationContainer);
  }

  async function removeLoader() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    loadingAnimationContainer.remove();
  }
  return {createLoader, showLoader, removeLoader};
})();
