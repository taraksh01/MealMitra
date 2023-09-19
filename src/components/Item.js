import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

import { addItem, removeItem } from "../../utils/cartSlice";

const Item = ({ item, text }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="item my-2 p-2 flex justify-between items-center"
      // key={item?.card?.info?.id}
    >
      <div>
        <h4 className="text-xl">{item?.card?.info?.name}</h4>
        <p>price: ₹ {item?.card?.info?.price / 100}</p>
        <p>{item?.card?.info?.description}</p>
      </div>
      <div
        className="bg-gray-300 px-3 py-1 rounded-s rounded-e cursor-pointer min-w-max ml-3"
        onClick={() =>
          text === "Add" ? dispatch(addItem(item)) : dispatch(removeItem(item))
        }
      >
        {text}
      </div>
    </div>
  );
};

export default Item;
