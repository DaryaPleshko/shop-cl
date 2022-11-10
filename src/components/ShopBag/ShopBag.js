import style from './ShopBag.module.css';
import { Button } from '@mui/material';

const ShopBag = ({ title, path, price }) => {
    return (
        <div className={style['main']}>
            <div className={style['shop']}>
                <div className={style['color-line']}></div>
                <div className={style['flex']}>
                    <img className={style['img-item']} src={require(`../../storage/${path}`)}></img>
                    <div>
                        <h4>{title}</h4>
                        <p className={style['price']}>{price}</p>
                        <Button variant="text" color='error'>delete</Button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ShopBag;
