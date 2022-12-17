import classNames from 'classnames';
import main from './GuestHomeSection.module.css';

const GuestHomeSection = () => {
  return (
    <div className={classNames(main['main'])}>
      <div className={classNames(main['mycontain'])}>
        <div className={main['left-info']}>
          <a href='#catalog-id'>           
            <div className={main['sale']}>11.11 the biggest sale in the history of our store</div>
          </a>
          <div>
            <h1>Start your bargain shopping right now!</h1>
            <p>Our shop will make you happy! Get started shopping!</p>
          </div>
        </div>
        <div className={main['img']}></div>
      </div>
    </div>
  );
};

export default GuestHomeSection;
