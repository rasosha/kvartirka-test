"use client";
import { useEffect, useState } from "react";
import getData from "../actions/getData";
import { IFetchData, NearEarthObject } from "../types";
import Element from "./Element";
import sortAsteroid from "../actions/sortAsteroids";
import Spinner from "./Spinner";

const List = ({ data }: { data: IFetchData | undefined }) => {
  const [showParam, setShowParam] = useState<"km" | "moon">("km");
  const [onlyHazard, setOnlyHazard] = useState(false);
  const [nextPage, setNextPage] = useState(data!.links.next);
  const [isLoading, setIsLoading] = useState(false);
  const [asteroids, setAsteroids] = useState<NearEarthObject[]>(
    sortAsteroid(Object.values(data!.near_earth_objects)[0]),
  );

  useEffect(() => {
    if (isLoading) {
      const getNewData = async () => {
        const newData = await getData(nextPage);
        if (newData) {
          const NEO = sortAsteroid(Object.values(newData["near_earth_objects"])[0]);
          setNextPage(newData["links"]["next"].replace("http://api.nasa", "https://api.nasa"));
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
    if (scrollHeight - scrollTop - clientHeight < 200) {
      setIsLoading(true);
    }
  };

  return (
    <>
      <p className="text-[28px] font-[700] leading-[36px]">Ближайшие подлёты астероидов</p>
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
      <label className="my-2">
        <input
          type="checkbox"
          className="mr-2"
          checked={onlyHazard}
          onChange={() => setOnlyHazard((prevState) => !prevState)}
        />
        Показать только опасные
      </label>
      {/* </section> */}
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
            <Element
              asteroid={asteroid}
              showParam={showParam}
              key={asteroid.id}
            />
          ))}
        {isLoading ? (
          <div className="flex flex-col items-center">
            <Spinner />
            <p className="self-center pb-6">Загрузка...</p>
          </div>
        ) : (
          <button
            onClick={() => setIsLoading(true)}
            className="mt-4 h-[48px] self-center rounded-[24px] bg-[--myOrange] px-[16px] py-[8px] text-[16px] font-bold capitalize"
          >
            Загрузить ещё
          </button>
        )}
      </div>
    </>
  );
};

export default List;
