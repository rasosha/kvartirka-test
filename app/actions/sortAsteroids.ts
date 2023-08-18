import { NearEarthObject } from "../types";

const sortAsteroid = (asteroids: NearEarthObject[]) => {
  return asteroids.sort((a, b) => {
    const timeA = a.close_approach_data[0].close_approach_date_full.split(" ")[1];
    const timeB = b.close_approach_data[0].close_approach_date_full.split(" ")[1];
    return timeA.localeCompare(timeB);
  });
};

export default sortAsteroid;
