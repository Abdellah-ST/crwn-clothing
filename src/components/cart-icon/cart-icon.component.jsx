import React from "react";
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { selectItemCount } from "../../redux/cart/cart.selectors";


import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">{itemCount}</span>
  </div>  
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
});

export default connect(
  mapStateToProps, mapDispatchToProps)(CartIcon);