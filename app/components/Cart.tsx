import getCorrectSuffix from "../actions/getCorrectSuffix";

type CartProps = {
  cart: string[];
};

const Cart = ({ cart }: CartProps) => {
  return (
    <div className="flex flex-col w-[150px] h-[161px] rounded-[24px] bg-[#232526]">
      <p className="p-4 pb-0 text-[20px]">Корзина</p>
      <p className="p-4 pt-0">
        {getCorrectSuffix(cart?.length, ["астероид", "астероида", "астероидов"])}
      </p>
      <button className="rounded-[24px] bg-[--myOrange] px-[16px] py-[8px] text-[16px] capitalize self-center mt-4 h-[48px] font-bold">
        отправить
      </button>
    </div>
  );
};

export default Cart;
