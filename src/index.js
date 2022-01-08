import "./styles.css";

const apiLogic = (() =>{

    async function queryAPI(query){
        try{
            const apiResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=RniEDW1yakFezEGAKtaMcLMz2KtS5xUKPdMUlky0&date=${query}`)
            const apiResponseJSON = await apiResponse.json();
            return(apiResponseJSON)
        }
        catch{
            // Error Handling is yet to be implemented
            console.log("yikes")
        }
    }

    function getTodayDate(){
        let date = new Date();
        return [date.getFullYear(),date.getMonth()+1,date.getDate()]
    }


    return {queryAPI, getTodayDate}
})()
