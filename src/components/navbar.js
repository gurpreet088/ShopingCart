import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Navigationbar({ setView }) {
  const { totalCount } = useSelector((state) => state.cart);

  useEffect(() => {}, [totalCount]);
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0 d-flex">
          <span
            onClick={() => {
              window.history.pushState({}, "", "/");
              setView("ITEM_LIST_VIEW");
            }}
            className="logo-text"
          >
            WardRobe
          </span>
        </div>

        <div className="col-md-3 text-end">
          <a
            role="button"
            className="notification"
            onClick={() => {
              window.history.pushState({}, "", "/cart-view");
              setView("CART_VIEW");
            }}
          >
            <i className="bi bi-cart"></i>
            <span class="badge"> {totalCount}</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navigationbar;
