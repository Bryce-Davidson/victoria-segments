export async function getStaticMap() {
  try {
    const res = fetch(
      `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "your-rapidapi-key",
          "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
