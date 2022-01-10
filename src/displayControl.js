import { apiLogic } from ".";
import heart from './remigho-like.svg'

export const displayControl = (()=>{

    async function createFeedCard() {
        const apodData = await apiLogic.getRandomAPOD();
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("feed-card");
        const header = await createCardHeader(apodData);
        const mediaContainer = await createCardMediaContainer(apodData);
        const footer = await createCardFooter(apodData);
        cardContainer.appendChild(header);
        cardContainer.appendChild(mediaContainer);
        cardContainer.appendChild(footer);
        feed.appendChild(cardContainer)
    }

    async function createCardHeader(apodData){
        const header = document.createElement("header");
        header.classList.add("post-header");
        const title = document.createElement("h4");
        title.classList.add("post-title");
        title.textContent = apodData["title"];
        const date = document.createElement("time");
        date.dateTime = apodData["date"];
        date.textContent = apodData["date"];
        header.appendChild(title);
        header.appendChild(date);
        return header;
    }

    async function createCardMediaContainer(apodData){
        const mediaContainer = document.createElement("figure");
        mediaContainer.classList.add("media-container");
        if(apodData["media_type"] == "video"){
            const video = document.createElement("iframe");
            video.height = "450";
            video.width = document.querySelector(".feed-card").offsetWidth;
            video.src = await getAPODUrl(apodData);
            mediaContainer.appendChild(video);
        }
        else{
            const image = document.createElement("img");
            image.classList.add("post-img");
            image.src = await getAPODUrl(apodData);
            mediaContainer.appendChild(image);
        }
        mediaContainer.children[0].onError = function (){
            mediaContainer.children[0].remove();
            const errorTextContainer = document.createElement("figure");
            errorTextContainer.classList.add("error-text-container");
            const errorText = document.createElement("h2");
            errorText.textContent = "Sorry, This Media Could Not Be Loaded :(";
            errorTextContainer.appendChild(errorText);
            mediaContainer.appendChild(errorTextContainer);
        }
        return mediaContainer;
    }
    
    async function createCardFooter(apodData){
        const footer = document.createElement('footer');
        footer.classList.add("post-footer");
        const likeContainer = createLikeContainer();
        footer.appendChild(likeContainer);
        const description = await createCardDescription(apodData);
        footer.appendChild(description);
        return footer;
    }

    async function createCardDescription(apodData){
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("description-container");
        const description = document.createElement("figcaption");
        description.classList.add("description");
        if(apodData["explanation"].length > 500){
            description.textContent = apodData["explanation"].slice(0,500);
            const seeMoreBtn = document.createElement("button");
            const seeMoreTxt = document.createElement("h5");
            seeMoreTxt.textContent = "...see more";
            seeMoreBtn.appendChild(seeMoreTxt);
            seeMoreBtn.classList.add("see-more-btn");
            seeMoreBtn.addEventListener("click", ()=>{
                description.textContent = apodData["explanation"];
            })
            description.appendChild(seeMoreBtn);
        }
        descriptionContainer.appendChild(description);
        return descriptionContainer;
    }

    function createLikeContainer(){
        const likeContainer = document.createElement("span");
        likeContainer.classList.add("like-container");
        const heartIcon = document.createElement('img');
        heartIcon.src = heart;
        heartIcon.classList.add('heart-icon');
        const likeCount = document.createElement("h5");
        likeCount.textContent = "0 Likes";
        likeContainer.appendChild(heartIcon);
        likeContainer.appendChild(likeCount);
        heartIcon.addEventListener("click", updateLikeCount);
        return likeContainer
    }

    function updateLikeCount(e){
        e.target.nextElementSibling.textContent = "1 Like";
    }

    async function getAPODUrl(apodData){
        if(apodData["hdurl"]){
            return apodData["hdurl"];
        }
        else{
            return apodData["url"];
        }
    }

    function createFeed(){
        createFeedCard();
        createFeedCard();
        window.addEventListener("scroll", (e) => {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
                createFeedCard();
            }
        })
    }

    async function tempSetImg() {
        const temp = await apiLogic.getRandomAPOD()
        console.log(temp)
        if(temp["hdurl"]){
            document.querySelector("#test-img").src = temp["hdurl"];
        }
        else{
            document.querySelector("#test-img").src = temp["url"];
        }
        document.querySelector("#test-name").textContent = temp["title"];
        const allHearts = document.querySelectorAll(".heart-icon");
        for(let i = 0; i<allHearts.length; i++){
            allHearts[i].src = heart;
        }
        if(temp["explanation"].length > 500){
            document.querySelector("#test-description").textContent = temp["explanation"].slice(0,500);
            const seeMoreBtn = document.createElement("button");
            const seeMoreTxt = document.createElement("h5");
            seeMoreTxt.textContent = "...see more";
            seeMoreBtn.appendChild(seeMoreTxt);
            document.querySelector("#test-description").appendChild(seeMoreBtn);
        }
        document.querySelector("#test-date").textContent = temp["date"];
    }

    return {tempSetImg, createFeed}
})()

