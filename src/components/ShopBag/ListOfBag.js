import { useState } from 'react';
import ShopBag from './ShopBag';
import style from './ShopBag.module.css';
import { orders } from '../../context/basket';
import SumProducts from './SumProducts';

const ListOfPBag = () => {

    const [products, setProducts] = useState(orders.array)
    return (
        <>
            <h2 className={style['title']}>Shopping bag</h2>
            {products.map((item) => <ShopBag key={item.id} setProducts={setProducts} count={item.count} title={item.title} path={item.path} price={item.price} {...item} />)}
            <SumProducts />
        </>
    );
};

export default ListOfPBag;
