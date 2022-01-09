import { apiLogic } from ".";

export const displayControl = (()=>{
    async function tempSetImg() {
        const temp = await apiLogic.getRandomAPOD()
        document.querySelector("#test-img").src = temp["hdurl"];
    }

    return {tempSetImg}
})()

