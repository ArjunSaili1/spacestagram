import {heart} from "../icons";

export const displayControl = (() => {
  function createFeedCard(apodData) {
    console.log(apodData)
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
      video.height = "450";
      video.width = "530px"
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
    const heartIcon = document.createElement("img");
    heartIcon.src = heart;
    heartIcon.classList.add("heart-icon");
    const likeCount = document.createElement("h5");
    likeCount.textContent = "0 Likes";
    likeContainer.appendChild(heartIcon);
    likeContainer.appendChild(likeCount);
    heartIcon.addEventListener("click", updateLikeCount);
    return likeContainer;
  }

  function updateLikeCount(event) {
    if (event.target.nextElementSibling.textContent === "1 like") {
      event.target.nextElementSibling.textContent = "0 likes";
    } else {
      event.target.nextElementSibling.textContent = "1 Like";
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
