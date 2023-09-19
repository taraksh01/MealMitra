import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import Item from "./Item";

const Cart = () => {
  const cartItems = useSelector((store) => store.store.items);
  const dispatch = useDispatch();
  return (
    <div className="w-6/12 m-auto">
      <div className=" bg-slate-300 flex justify-around items-center text-lg">
        Cart
        <button
          className="px-2 m-2 border border-orange-400 rounded-md"
          onClick={() => console.log(dispatch(clearCart()))}
        >
          clear cart
        </button>
      </div>
      <div className="min-h-[900px]">
        {cartItems.length == 0 ? (
          <div className="text-center  text-3xl">
            Please add item to the cart and return back
          </div>
        ) : (
          cartItems.map((item) => (
            <Item key={item.id} item={item} text={"Remove"} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
