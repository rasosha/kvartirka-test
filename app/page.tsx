import getData from "./actions/getData";
import Cart from "./components/Cart";
import List from "./components/List";

export default async function Home() {
  const data = await getData();
  return (
    <div className="revative z-10 flex justify-center">
      <main className=" mb-4 flex w-[400px] flex-col items-start sm:w-[279px]">
        <List data={data} />
      </main>
      <aside className="fixed bottom-0 z-20 sm:left-[0px] sm:w-screen md:right-[200px] md:top-[140px] lg:right-[300px] lg:top-[140px]">
        <Cart />
      </aside>
    </div>
  );
}
