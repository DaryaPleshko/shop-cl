import style from './ShopBag.module.css';
import { Button } from '@mui/material';
import { orders } from '../../context/basket';
import arrayProducts from '../../context/products';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import { useState } from 'react';


const ShopBag = ({ title, path, price, setProducts, count }) => {
    let [bool, setBool] = useState(false)
    let [counts, setCounts] = useState(count)

    const deleteToBasket = () => {
        const filtered = orders.array.filter(el => title !== el.title ? el : null)
        orders.array = filtered;
        setProducts(orders.array)
    }

    const doPlus = () => {
        const filtered = orders.array.filter(el => title === el.title ? el : null);
        setCounts(++filtered[0].count)
    }    

    const doMinus = () => {
        const filtered = orders.array.filter(el => title === el.title ? el : null);
        setCounts(--filtered[0].count)
    }

    const buyProduct = () => {
        if (bool) {
            setBool(false);
            deleteToBasket()
        } else setBool(true)
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
                            <div className={style['flex-content']}>
                                <p className={style['count']} onClick={doMinus}>-</p>
                                <div className={style['count']}>{counts}</div>
                                <p className={style['count']} onClick={doPlus}>+</p>
                            </div>
                            <div className={style['flex-wrap']}>
                                <div onClick={deleteToBasket}>
                                    <Button variant="text" color='error'>delete</Button>
                                </div>
                                <div>
                                    <Button onClick={buyProduct} variant="text" color="primary">buy now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {bool ? <SimpleSnackbar msg="Вы успешно приобрели товар!" /> : null}
            </div>
        </div>
    );
};

export default ShopBag;
