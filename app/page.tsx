import getData from "./actions/getData";
import MainPage from "./components/MainPage";

export default async function Home() {
  const data = await getData();
  // console.log(":>>", data?.element_count);

  return (
    <>
      <header className="self-start p-2">
        <h1 className="text-[32px] text-[--myOrange] ">ARMAGEDDON 2023</h1>
        <div>
          <p>ООО “Команда им. Б. Уиллиса”.</p>
          <p>Взрываем астероиды с 1998 года.</p>
        </div>
      </header>
      <MainPage data={data} />
    </>
  );
}
