import style from './AboutStore.module.css';
import { Link } from 'react-router-dom';

const AboutStore = () => {
    return (
        <div className={style['main']}>
            <div className={style['container']}>
                <div className={style['title']}>ABOUT US</div>    
                <div className={style['flex']}>
                    <div>
                        <div className={style['first']}></div>
                        <p className={style['text']}>“Sum-Store” - is an online store that started in 2022!
                            Our platform is designed for fast and comfortable shopping.</p>
                    </div>
                    <div>
                        <div className={style['second']}></div>
                        <p className={style['text']}>We strive to promote the platform to a global level,
                            increasing sales and quality of goods!</p>
                    </div>
                    <div>
                        <div className={style['third']}></div>
                        <p className={style['text']}>Sum-Store started his activity with a small advertising store on Instagram, but we
                            believed that perseverance and perseverance on the way to achieving the goal would give positive results. And we succeeded!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStore;
