import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import Navigationbar from "./navbar";
import ShopItemListView from "./shopItemListView";
import CartItemListView from "./cartItemView";

function MainLayout() {
  const [viewType, setViewType] = useState("");

  return (
    <>
      <Container>
        {" "}
        <Navigationbar setView={setViewType} />
      </Container>
      {viewType === "CART_VIEW" ? <CartItemListView /> : <ShopItemListView />}
    </>
  );
}

export default MainLayout;
