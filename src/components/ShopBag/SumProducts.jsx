import { orders } from '../../context/basket';

import style from './ShopBag.module.css';

const SumProducts = () => {

    const sumElements = () => {
        let sum = orders.array.reduce((middle, el) => {
            if (el.count > 1) return middle + el.price * el.count
            return middle + el.price
        }, 0)
        return sum
    }

    return (
        <h2 className={style['title']}>{`Итоговая сумма - ${sumElements()} $`}</h2>
    );
};

export default SumProducts;
