import {heart} from "../icons";

export const displayControl = (() => {
  function createFeedCard(apodData) {
    const feed = document.querySelector("#feed");
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("feed-card");
    const header = createCardHeader(apodData);
    const mediaContainer = createCardMediaContainer(apodData);
    const footer = createCardFooter(apodData);
    cardContainer.appendChild(header);
    cardContainer.appendChild(mediaContainer);
    cardContainer.appendChild(footer);
    feed.appendChild(cardContainer);
  }

  function createCardHeader(apodData) {
    const header = document.createElement("header");
    header.classList.add("post-header");
    const title = document.createElement("h4");
    title.classList.add("post-title");
    title.textContent = apodData.title;
    const date = document.createElement("time");
    date.classList.add("post-date");
    date.dateTime = apodData.date;
    date.textContent = apodData.date;
    header.appendChild(title);
    header.appendChild(date);
    return header;
  }

  function createCardMediaContainer(apodData) {
    const mediaContainer = document.createElement("figure");
    mediaContainer.classList.add("media-container");
    if (apodData.media_type === "video") {
      const video = document.createElement("iframe");
      video.src = getAPODUrl(apodData);
      mediaContainer.appendChild(video);
    } else {
      const image = document.createElement("img");
      image.classList.add("post-img");
      image.src = getAPODUrl(apodData);
      mediaContainer.appendChild(image);
    }
    mediaContainer.children[0].onError = function() {
      mediaContainer.children[0].remove();
      const errorTextContainer = document.createElement("figure");
      errorTextContainer.classList.add("error-text-container");
      const errorText = document.createElement("h2");
      errorText.textContent = "Sorry, This Media Could Not Be Loaded :(";
      errorTextContainer.appendChild(errorText);
      mediaContainer.appendChild(errorTextContainer);
    };
    return mediaContainer;
  }

  function createCardFooter(apodData) {
    const footer = document.createElement("footer");
    footer.classList.add("post-footer");
    const likeContainer = createLikeContainer();
    footer.appendChild(likeContainer);
    const description = createCardDescription(apodData);
    footer.appendChild(description);
    return footer;
  }

  function createCardDescription(apodData) {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    const description = document.createElement("figcaption");
    description.classList.add("description");
    if (apodData.explanation.length > 500) {
      description.textContent = apodData.explanation.slice(0, 500);
      const seeMoreBtn = document.createElement("button");
      const seeMoreTxt = document.createElement("h5");
      seeMoreTxt.textContent = "...see more";
      seeMoreBtn.appendChild(seeMoreTxt);
      seeMoreBtn.classList.add("see-more-btn");
      seeMoreBtn.addEventListener("click", () => {
        description.textContent = apodData.explanation;
      });
      description.appendChild(seeMoreBtn);
    } else {
      description.textContent = apodData.explanation;
    }
    descriptionContainer.appendChild(description);
    return descriptionContainer;
  }

  function createLikeContainer() {
    const likeContainer = document.createElement("span");
    likeContainer.classList.add("like-container");
    const likeCount = document.createElement("h5");
    likeCount.textContent = "0 Likes";
    likeContainer.innerHTML += heart;
    const heartIcon = likeContainer.children[0];
    heartIcon.classList.add("heart-icon");
    heartIcon.addEventListener("click", (e) => {updateLikeCount(e, likeCount)});
    likeContainer.appendChild(likeCount);
    return likeContainer;
  }

  function updateLikeCount(heartIconEvent, likeCount) {
    const heartSVGPath = document.querySelector("#path18741");
    if (likeCount.textContent === "1 like") {
      likeCount.textContent = "0 likes";
      heartSVGPath.style.fill = "none";
    } else {
      likeCount.textContent = "1 like";
      heartSVGPath.style.fill = "red";
    }
  }

  function getAPODUrl(apodData) {
    if (apodData.hdurl) {
      return apodData.hdurl;
    } else {
      return apodData.url;
    }
  }

  return {createFeedCard};
})();
