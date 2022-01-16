import {mainDisplay} from "./mainDisplay";

export const loaders = (() => {

  const loadingAnimation = document.querySelector(".loading-animation");

  function createLoader() {
    loadingAnimation.remove();
    mainDisplay.getFeed().appendChild(loadingAnimation);
  }

  async function removeLoader() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    loadingAnimation.remove();
  }
  return {createLoader, removeLoader};
})();
