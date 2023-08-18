import { useListContext } from "../Context";
import Card from "./Card";

const Order = () => {
  const { listState } = useListContext();
  console.log("listState:>>", listState);
  return (
    <div className="flex flex-col gap-6">
      {listState.map((asteroid) => (
        <Card
          key={asteroid.id}
          asteroid={asteroid}
        />
      ))}
    </div>
  );
};
export default Order;
