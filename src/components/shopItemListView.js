import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemCard from "./itemCard";
import { getCartTotal } from "../reduxToolkit/feature/cartSlice";

function ItemListView(props) {
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row">
            {items.length > 0 &&
              items.map((item) => {
                return (
                  <div class="col-md-3 col-sm-6 col-xs-12 bootCols">
                    <ItemCard item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListView;
