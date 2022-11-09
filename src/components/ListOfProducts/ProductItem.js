import listOfProducts from './css/ListOfProducts.module.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const ProductItem = ({ title, path }) => {
  const MouseOver = (event) => {
    event.target.style.background = 'red';
  }

  const MouseOut = (event) => {
    event.target.style.background = '';
  }

  return (
    <div onMouseOver={MouseOver} onMouseOut={MouseOut} className={listOfProducts['course']}>
      <Link to={`/product/${title}`}>
        <div className={listOfProducts['color-line']}></div>
        <img className={listOfProducts['img-item']} src={require(`./assets/${path}`)}></img>
        <h3>{title}</h3>
        <div className={listOfProducts['navigation']}>
          <p className={listOfProducts['price']}>100 $</p>
          <IconButton color="primary" size="large" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
