import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getData from "../actions/getData";
import { IFetchData, NearEarthObject } from "../types";
import Card from "./Card";

type ShowParam = "km" | "moon";
type ListParams = {
  data: IFetchData;
  cart: string[];
  setCart: Dispatch<SetStateAction<string[]>>;
};

const List = () => {
  const [showParam, setShowParam] = useState<ShowParam>("km");
  const [onlyHazard, setOnlyHazard] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [asteroids, setAsteroids] = useState<NearEarthObject[]>([]);

  useEffect(() => {
    if (isLoading) {
      const getNewData = async () => {
        const data = nextPage ? await getData(nextPage) : await getData();
        if (data) {
          const NEO = Object.values(data["near_earth_objects"])[0].sort((a, b) => {
            const timeA = a.close_approach_data[0].close_approach_date_full.split(" ")[1];
            const timeB = b.close_approach_data[0].close_approach_date_full.split(" ")[1];
            return timeA.localeCompare(timeB);
          });
          setNextPage(data["links"]["next"]);
          setAsteroids((prevState) => [...prevState, ...NEO]);
        }
        setIsLoading(false);
      };
      getNewData();
    }
  }, [isLoading, nextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop - clientHeight < 100) {
      setIsLoading(true);
    }
  };

  return (
    <div className="z-10">
      <div className="mb-4 flex w-[400px] flex-col items-start">
        <p className="text-[28px]">Ближайшие подлёты астероидов</p>
        <ul className="flex list-none gap-4 no-underline">
          <li
            onClick={() => setShowParam("km")}
            className={`cursor-pointer${showParam === "km" ? " underline" : ""}`}
          >
            в километрах
          </li>
          <li>|</li>
          <li
            onClick={() => setShowParam("moon")}
            className={`cursor-pointer${showParam === "moon" ? " underline" : ""}`}
          >
            в лунных орбитах
          </li>
        </ul>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={onlyHazard}
            onChange={() => setOnlyHazard((prevState) => !prevState)}
          />
          Показать только опасные
        </label>
      </div>
      <div className="flex flex-col gap-6">
        {asteroids
          .filter((asteroid) => {
            if (onlyHazard) {
              return asteroid.is_potentially_hazardous_asteroid === true;
            } else {
              return asteroid;
            }
          })
          .map((asteroid) => (
            <Card
              asteroid={asteroid}
              showParam={showParam}
              key={asteroid.id}
            />
          ))}
        {isLoading && <p className="self-center">Загрузка...</p>}
        {!isLoading && (
          <button
            onClick={() => setIsLoading(true)}
            className="mt-4 h-[48px] self-center rounded-[24px] bg-[--myOrange] px-[16px] py-[8px] text-[16px] font-bold capitalize"
          >
            Загрузить ещё
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
