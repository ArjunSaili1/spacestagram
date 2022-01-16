import {heart} from "../../icons";

export const cards = (() => {

  let cardContainer;
  const liked = [];

  function createErrorCard() {
    cardContainer = document.createElement("section");
    cardContainer.classList.add("feed-card");
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-text-container");
    errorContainer.classList.add("error-card");
    const errorText = document.createElement("h3");
    errorText.classList.add('error-text');
    errorText.textContent = "Sorry, there has been an error from the NASA APOD API.";
    errorContainer.appendChild(errorText);
    cardContainer.appendChild(errorContainer);
    return cardContainer;
  }

  function createFeedCard(apodData) {
    cardContainer = document.createElement("section");
    cardContainer.classList.add("feed-card");
    cardContainer.id = `a${apodData.date.replace("-", '')}`;
    const header = createCardHeader(apodData);
    const mediaContainer = createCardMediaContainer(apodData);
    const footer = createCardFooter(apodData);
    cardContainer.appendChild(header);
    cardContainer.appendChild(mediaContainer);
    cardContainer.appendChild(footer);
    return cardContainer;
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
    mediaContainer.addEventListener("dblclick", () => { updateLikeCountDisplay(apodData); });
    return mediaContainer;
  }

  function createCardFooter(apodData) {
    const footer = document.createElement("footer");
    footer.classList.add("post-footer");
    const likeContainer = createLikeContainer(apodData);
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

  function createLikeContainer(apodData) {
    const likeContainer = document.createElement("span");
    likeContainer.classList.add("like-container");
    const likeCount = document.createElement("h5");
    likeContainer.innerHTML += heart;
    const heartIcon = likeContainer.children[0];
    heartIcon.classList.add("heart-icon");
    if (apodData.likes === 1) {
      likeCount.textContent = `${apodData.likes} like`;
      heartIcon.children[0].children[0].style.fill = "red";
    } else {
      likeCount.textContent = `${apodData.likes} likes`;
    }
    likeContainer.appendChild(likeCount);
    heartIcon.addEventListener("click", () => { updateLikeCountDisplay(apodData); });
    return likeContainer;
  }

  function updateLikeCountDisplay(apodData) {
    const cardId = `a${apodData.date.replace("-", '')}`;
    const likedCard = document.querySelector("#" + cardId)
    const heartSVG = likedCard.children[2].children[0].children[0];
    const heartSVGPath = heartSVG.children[0].children[0];
    const likeCount = heartSVG.nextElementSibling;
    if (likeCount.textContent === "1 like") {
      likeCount.textContent = "0 likes";
      heartSVGPath.style.fill = "none";
      apodData.likes = 0;
      const index = liked.indexOf(apodData);
      if (index > -1) {
        liked.splice(index, 1);
      }
    } else {
      likeCount.textContent = "1 like";
      heartSVGPath.style.fill = "red";
      liked.push(apodData);
      apodData.likes = 1;
    }
  }

  function getAPODUrl(apodData) {
    if (apodData.hdurl) {
      return apodData.hdurl;
    } else {
      return apodData.url;
    }
  }

  function getLiked() { return liked; }

  return {createErrorCard, createFeedCard, getLiked, updateLikeCountDisplay};

})();
