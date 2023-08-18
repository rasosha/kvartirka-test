import { ListProvider } from "./Context";
import getData from "./actions/getData";
import Cart from "./components/Cart";
import List from "./components/List";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <section className="fixed right-[300px] top-[140px] ">
        <Cart data={data} />
      </section>
      <List data={data} />
    </>
  );
}
