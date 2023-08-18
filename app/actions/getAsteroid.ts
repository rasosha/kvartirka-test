import { NearEarthObject } from "../types";

const url = "https://api.nasa.gov/neo/rest/v1/neo";
const apiKey = process.env.API_KEY;

const getAsteroid = async (id: string): Promise<NearEarthObject | undefined> => {
  const newUrl = `${url}/${id}?api_key=${apiKey}`;
  try {
    const data = await fetch(newUrl, { next: { revalidate: 60 } });
    return await data.json();
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return undefined;
  }
};

export default getAsteroid;
