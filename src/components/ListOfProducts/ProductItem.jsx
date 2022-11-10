import listOfProducts from './css/ListOfProducts.module.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { orders } from '../../context/basket';
import arrayProducts from '../../context/products';
import { useState } from 'react';


const ProductItem = ({ title, path, price, count }) => {
  const [countPr, setCountPr] = useState(0)

  const addToBasket = () => {
    const found = arrayProducts.filter(el => title === el.title);
    found[0].count++
    if (countPr === 0) orders.array.push(found[0])
    setCountPr(found[0].count)
  }

  return (
    <div className={listOfProducts['shop']}>
      <div className={listOfProducts['color-line']}></div>
      <img className={listOfProducts['img-item']} src={require(`../../storage/${path}`)}></img>
      <h3>{title}</h3>
      <div className={listOfProducts['navigation']}>
        <p className={listOfProducts['price']}>{`${price} $`}</p>
        <div onClick={addToBasket}>
          <IconButton color="primary" size="large" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
