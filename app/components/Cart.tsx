import getCorrectSuffix from "../actions/getCorrectSuffix";

type CartProps = {
  cart: string[];
};

const Cart = () => {
  return (
    <div className="flex h-[161px] w-[150px] flex-col rounded-[24px] bg-[#232526]">
      <p className="p-4 pb-0 text-[20px]">Корзина</p>
      <p className="p-4 pt-0">
        {/* {getCorrectSuffix(cart?.length, ["астероид", "астероида", "астероидов"])} */}
      </p>
      <button className="mt-4 h-[48px] self-center rounded-[24px] bg-[--myOrange] px-[16px] py-[8px] text-[16px] font-bold capitalize">
        отправить
      </button>
    </div>
  );
};

export default Cart;
