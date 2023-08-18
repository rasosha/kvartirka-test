import { IFetchData } from "../types";
import getFormatedDate from "./getFormatedDate";

const url = "https://api.nasa.gov/neo/rest/v1/feed";
const start = getFormatedDate();
const end = getFormatedDate();

const apiKey = process.env.API_KEY;

const getData = async (nextUrl = ""): Promise<IFetchData | undefined> => {
  const newUrl = nextUrl || `${url}?start_date=${start}&end_date=${end}&api_key=${apiKey}`;
  try {
    const data = await fetch(newUrl, { next: { revalidate: 60 } });
    return await data.json();
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return undefined;
  }
};

export default getData;
