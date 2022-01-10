import { apiLogic } from ".";

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
        // 
    }

    return {tempSetImg}
})()

