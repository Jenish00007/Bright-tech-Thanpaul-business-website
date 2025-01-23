import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useData, useAuth, useWish, useCart } from "..";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AOS from 'aos';  // Ensure AOS is imported
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

export default function ProductCard({ item, inWishlist }) {
  const { deleteWishListData, addWishListData, isAvailableInWishList } = useWish();
  const { getSingleProduct } = useData();
  const { addToCardFunction, isItemInCart, changeQuantity } = useCart();
  const { token } = useAuth();
  const {
    _id,
    product_name,
    product_price,
    product_prevPrice,
    product_image,
    product_isBadge,
  } = item;
  const discount = Math.floor(
    100 - (product_price / product_prevPrice) * 100
  );

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div
      className="ProductCard"
      key={_id}
      data-aos="fade-up"  // Apply animation (you can change this to other types like "fade-in", "zoom-in", etc.)
    >
      <NavLink to={`/`}>
        <div
          onClick={() => {
            getSingleProduct(_id);
          }}
        >
          <img src={product_image} alt="exclusive jewelry" />
          <div className="cardTextContent">
            <h3>{product_name.slice(0, 15)}</h3>
          </div>

          <span title={product_isBadge} className="trendingIcon">
            {product_isBadge.length > 0 ? (
              <div className="ribbon ribbon-top-left">
                <span>{product_isBadge}</span>
              </div>
            ) : null}
          </span>

          <div className="buttons">
            {/* Button Logic */}
          </div>
          {isItemInCart(_id) && inWishlist ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                changeQuantity(_id, token, "increment");
              }}
            >
              + 1 in Cart
            </button>
          ) : null}
        </div>
      </NavLink>
    </div>
  );
}
