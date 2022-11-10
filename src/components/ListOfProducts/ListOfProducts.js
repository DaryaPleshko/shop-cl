import ProductItem from './ProductItem';
import listOfProducts from './css/ListOfProducts.module.css';
import data from '../../context/products';

const ListOfProducts = () => {
  return (
    <div id='catalog-id' className={listOfProducts['shop-catalog']}>
      {data && data.map((item) => <ProductItem key={item.id} id={item.id} title={item.title} path={item.path} price={item.price} {...item} />)}
    </div>
  );
};

export default ListOfProducts;
