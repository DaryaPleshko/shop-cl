import classNames from 'classnames';
import main from './GuestHomeSection.module.css';

const GuestHomeSection = () => {
  return (
    <section className={classNames(main['main'])}>
      <div className={classNames(main['mycontain'])}>
        <div className={main['left-info']}>
          <div className={main['sale']}>11.11 the biggest sale in the history of our store</div>
          <div>
            <h1>Start your bargain shopping right now!</h1>
            <p>Our shop will make you happy! Get started shopping!</p>
          </div>
        </div>
        <div className={main['img']}></div>
      </div>
    </section>
  );
};

export default GuestHomeSection;
