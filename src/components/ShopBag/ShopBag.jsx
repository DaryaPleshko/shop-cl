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
            <div className={style['wrapper']}>
                <div className={style['shop']}>
                    <div className={style['color-line']}></div>
                    <div className={style['flex']}>
                        <img className={style['img-item']} src={require(`../../storage/${path}`)}></img>
                        <div>
                            <h4>{title}</h4>
                            <p className={style['price']}>{`${price} $`}</p>
                            <div onClick={deleteToBasket}>
                                <Button variant="text" color='error'>delete</Button>
                            </div>
                        </div>
                        <div className={style['flex']}> 
                            <p className={style['count']}>-</p>
                            <div className={style['count']}>{count}</div>
                            <p className={style['count']}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBag;
