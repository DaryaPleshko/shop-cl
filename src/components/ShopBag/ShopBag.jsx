import style from './ShopBag.module.css';
import { Button } from '@mui/material';
import { orders } from '../../context/basket';

const ShopBag = ({ title, path, price, setProducts, count }) => {

    const deleteToBasket = () => {
        const filtered = orders.array.filter(el => title !== el.title ? el : null)
        orders.array = filtered
        setProducts(orders.array)
    }

    return (
        <div className={style['main']}>
            <div className={style['shop']}>
                <div className={style['color-line']}></div>
                <div className={style['flex']}>
                    <img className={style['img-item']} src={require(`../../storage/${path}`)}></img>
                    <div>
                        <h4>{title}</h4>
                        <p className={style['price']}>{price}</p>
                        <div onClick={deleteToBasket}>
                            <Button variant="text" color='error'>delete</Button>
                        </div>
                    </div>
                    <div>{count}</div>
                </div>
            </div>
        </div>
    );
};

export default ShopBag;
