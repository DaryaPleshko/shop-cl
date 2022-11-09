import ProductItem from './ProductItem';
import listOfProducts from './css/ListOfProducts.module.css';

const ListOfProducts = () => {
  const data = [
    {
      id: 1,
      title: 'Watch',
      path: 'clock.jpg'
    },
    {
      id: 2,
      title: 'Headphones',
      path: 'naushnihi.webp'
    },
    {
      id: 3,
      title: 'TV',
      path: 'tv.jpeg'
    },
    {
      id: 4,
      title: 'Iron',
      path: 'orig.webp'
    },
    {
      id: 5,
      title: 'Cup',
      path: 'cup.jpg'
    },
    {
      id: 6,
      title: 'Coffee machine',
      path: 'coffee.jpg'
    },
  ]

  return (
    <div id='catalog-id' className={listOfProducts['courses']}>
      {data && data.map((item) => <ProductItem key={item.id} title={item.title} path={item.path} {...item} />)}
    </div>
  );
};

export default ListOfProducts;
