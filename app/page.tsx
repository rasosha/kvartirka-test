import getData from "./actions/getData";
import List from "./components/List";

export default async function Home() {
  const data = await getData();
  // return <List data={data} />;
  return <div>a</div>;
}
