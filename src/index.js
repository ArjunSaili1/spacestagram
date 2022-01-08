import "./styles.css";

const apiLogic = (() =>{

    async function queryAPI(query){
        try{
            const apiResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=RniEDW1yakFezEGAKtaMcLMz2KtS5xUKPdMUlky0&date=${query}`)
            const apiResponseJSON = await apiResponse.json();
            console.log(apiResponseJSON)
        }
        catch{
            console.log("error")
        }
    }

    return {queryAPI}
})()

apiLogic.queryAPI("2002-10-02");