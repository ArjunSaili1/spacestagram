import { apiLogic } from ".";
import heart from './remigho-like.svg'

export const displayControl = (()=>{

    async function createFeedCard() {
        const apodData = await apiLogic.getRandomAPOD()
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("feed-card");
        const header = await createCardHeader(apodData);
        cardContainer.appendChild(header);
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

    function createFeed(){
        createFeedCard();
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

