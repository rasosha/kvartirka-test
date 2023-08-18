import Image from "next/image";
import Link from "next/link";
import getDate from "../actions/getDate";

type CartProps = {
  id: string;
  name: string;
  diameter: string;
  missDistanceKm: string;
  date: string;
  is_potentially_hazardous_asteroid: boolean;
};

export default async function Cart({ searchParams }: { searchParams: string }) {
  const arr = Object.values(searchParams)[0];
  const parcedArr = arr ? JSON.parse(arr) : arr;

  return (
    <>
      {/* <main className="flex flex-col items-center">
        <p className="text-[28px] font-bold">Заказ отправлен!</p>
        <Link
          href={"/"}
          className="p-4"
        >
          ❰ Назад к списку
        </Link>
        <div className="flex flex-col gap-2">
          {parcedArr &&
            parcedArr.map((asteroid: CartProps) => (
              <div
                className="border-2 border-orange-500 p-4"
                key={asteroid.id}
              >
                <p className="text-[24px] font-bold">{getDate(asteroid.date)}</p>
                <div className="flex items-center">
                  <div>
                    <p className="flex flex-col items-center">
                      {Math.round(+asteroid.missDistanceKm)
                        .toString()
                        .replace(/(\d)(?=(\d{3})+$)/g, "$1 ") +
                        " " +
                        "км"}
                    </p>
                    <Image
                      src="/arrow.svg"
                      alt="delimiter"
                      width={150}
                      height={32}
                    />
                  </div>
                  <Image
                    src={+asteroid.diameter < 50 ? "/asteroid_small.png" : "/asteroid_big.png"}
                    alt={+asteroid.diameter < 50 ? "small asteroid image" : "big asteroid image"}
                    width={+asteroid.diameter < 50 ? 22 : 36}
                    height={+asteroid.diameter < 50 ? 24 : 40}
                    className="flex-0 mx-4"
                  />

                  <div className="flex flex-col items-start">
                    <p className="border-b-[1px] font-bold">{asteroid.name}</p>
                    <p className="text-[12px]">Ø {asteroid.diameter} м</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="flex">
                    {asteroid.is_potentially_hazardous_asteroid ? "⚠️Опасен" : ""}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main> */}
      <footer className="fixed bottom-0 flex w-screen justify-center">
        <p>© Все права и планета защищены</p>
      </footer>
    </>
  );
}
