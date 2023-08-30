import Link from "next/link";
import getAsteroid from "../../actions/getAsteroid";
import getDate from "../../actions/getDate";

export default async function Page({ params }: { params: { id: string } }) {
  const asteroid = await getAsteroid(params.id);
  const closures = asteroid?.close_approach_data.sort((a, b) => {
    const timeA = a.close_approach_date_full;
    const timeB = b.close_approach_date_full;
    return timeA.localeCompare(timeB);
  });
  const diameter = Math.ceil(
    (asteroid!.estimated_diameter.meters.estimated_diameter_min +
      asteroid!.estimated_diameter.meters.estimated_diameter_max) /
      2,
  );
  const bodies: { [key: string]: string } = {
    Earth: "Земли",
    Venus: "Венеры",
    Mars: "Марса",
    Moon: "Луны",
    Merc: "Меркурия",
    Juptr: "Юпитера",
  };

  return (
    <main className="m-auto flex flex-col items-center">
      <Link
        href={"/"}
        className="hover:text-[--myOrange]"
      >
        ❰ Назад к списку
      </Link>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <p className="border-b-[1px] text-[24px] font-bold">{asteroid!.name}</p>
          <p className="text-[12px]">Ø {diameter} м</p>
        </div>
      </div>
      <div className="flex gap-4">
        <p className="flex">{asteroid!.is_potentially_hazardous_asteroid ? "⚠️Опасен" : ""}</p>
      </div>
      <div>
        {closures &&
          closures!.map((closure) => {
            return (
              <div
                key={closure.epoch_date_close_approach}
                className="m-4 border-2 border-[--myOrange] p-4"
              >
                <p>
                  {"Время максимального сближения: " + getDate(closure.epoch_date_close_approach)}
                </p>
                <p>
                  {"Расстояние до Земли: ≈" +
                    Math.round(+closure.miss_distance.kilometers)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+$)/g, "$1 ") +
                    "км"}
                </p>
                <p>
                  {"Скорость относительно Земли: ≈" +
                    (+closure.relative_velocity.kilometers_per_second).toFixed(3) +
                    " " +
                    "км/с"}{" "}
                </p>
                <p>
                  {`Летит по орбите вокруг ${
                    bodies.hasOwnProperty(closure.orbiting_body)
                      ? bodies[`${closure.orbiting_body}`]
                      : closure.orbiting_body
                  }`}
                </p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
