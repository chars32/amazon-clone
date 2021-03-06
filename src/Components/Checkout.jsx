import React from "react";

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

import "./Checkout.css";
import { useStateValue } from "../state/StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg"
          alt="amazon banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              raiting={item.raiting}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
