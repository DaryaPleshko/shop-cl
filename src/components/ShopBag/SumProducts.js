import { orders } from '../../context/basket';
import { useState } from 'react';

const SumProducts = () => {
    // const [sumAll, setSumAll] = useState(0)

    const sumElements = () => {
        let sum = orders.array.reduce((middle, el) => {
            if (el.count > 1) return middle + el.price * el.count
            return middle + el.price
        }, 0)
        // setSumAll(sum)
        return sum
    }

    return (
        <>{sumElements()}</>
    );
};

export default SumProducts;
