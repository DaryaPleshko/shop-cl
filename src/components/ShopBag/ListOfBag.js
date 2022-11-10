import ShopBag from './ShopBag';
import style from './ShopBag.module.css';
import basket from '../../context/basket';

const ListOfPBag = () => {

    return (
        <>
            <h2 className={style['title']}>Shopping bag</h2>
            {basket.map((item) => <ShopBag key={item.id} {...item} title={item.title} path={item.path} price={item.price} />)}
        </>
    );
};

export default ListOfPBag;
