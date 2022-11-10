import listOfProducts from './css/ListOfProducts.module.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Link } from 'react-router-dom';
import arrayBasket from '../../context/basket';
import arrayProducts from '../../context/products';


const ProductItem = ({ id, title, path, price }) => {

  const addToBasket = () => {
    const found = arrayProducts.filter(el => title === el.title)
    arrayBasket.push(found[0])
  }

  return (
    <div className={listOfProducts['shop']}>
      {/* <Link to={`/product/${id}`}> */}
        <div className={listOfProducts['color-line']}></div>
        <img className={listOfProducts['img-item']} src={require(`../../storage/${path}`)}></img>

        <h3>{title}</h3>
        <div className={listOfProducts['navigation']}>
          <p className={listOfProducts['price']}>{price}</p>
          {/* <Link to={`/bag`} onClick={addToBasket}> */}
          <div onClick={addToBasket}>
            <IconButton color="primary" size="large" aria-label="add to shopping cart">
              <AddShoppingCartIcon fontSize="large" />
            </IconButton>
          </div>

          {/* </Link> */}
        </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductItem;
