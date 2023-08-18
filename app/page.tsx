import getData from "./actions/getData";
import List from "./components/List";

export default async function Home() {
  const data = await getData();
  return data ? <List data={data} /> : <div>1</div>;
}
