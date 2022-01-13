export const apiLogic = (() => {
  async function queryAPI(query) {
    try {
      const apiResponse = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=RniEDW1yakFezEGAKtaMcLMz2KtS5xUKPdMUlky0&date=${query}`,
        {mode: "cors"},
      );
      const apiResponseJSON = await apiResponse.json();
      return [apiResponseJSON, null];
    } catch (error) {
      return [null, error];
    }
  }

  function getRandomDate() {
    const todayDate = new Date();
    const startDate = new Date(1995, 5, 16);
    return new Date(
      startDate.getTime() +
        (Math.random() * (todayDate.getTime() - startDate.getTime())),
    ).toLocaleDateString("fr-CA");
  }

  async function getRandomAPOD() {
    const randomDate = getRandomDate();
    const randomAPOD = await queryAPI(randomDate);
    return randomAPOD;
  }

  return {queryAPI, getRandomAPOD};
})();
