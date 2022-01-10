import { apiLogic } from ".";
import heart from './remigho-like.svg'

export const displayControl = (()=>{
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

    return {tempSetImg}
})()

