import classNames from 'classnames';
import { Link } from 'react-router-dom';
import footer from './Footer.module.css';

const Footer = () => {
  return (
    <div className={footer['footer']}>
      <div className={footer['mycontain']}>
        <div className={classNames(footer['footer-upper-wrap'], footer['p-v50'])}>
          <div className={footer['footer-links-wrap']}>
            <Link to={'*'} className={footer['footer-links']}>
              About
            </Link>
            <Link to={'*'} className={footer['footer-links']}>
              Clients Feedback
            </Link>
            <Link to={'*'} className={footer['footer-links']}>
              Careers
            </Link>
            <Link to={'*'} className={footer['footer-links']}>
              Status
            </Link>
          </div>
          <div className={footer['footer-cta-wrap']}>
            <p className={footer['white']}>Stay tuned.</p>
            <Link to={'*'} className={footer['nav-btn']}>
              Get started
            </Link>
          </div>
          <div className="div-block">
            <div className="lower-links-wrap">
              <Link to={'*'} className={footer['footer-links']}>
                Privacy
              </Link>
              <Link to={'*'} className={footer['footer-links']}>
                Security
              </Link>
              <Link to={'*'} className={footer['footer-links']}>
                Terms of service
              </Link>
            </div>
            <Link to={'*'} className="footer-logo-wrap w-inline-block w--current">
            <h1 className={footer['nav-logo-link']}>Sum-Store</h1>
            </Link>
          </div>
        </div>
        <div className={footer['small-caps']}>© Sum-Store 2022</div>
      </div>
    </div>
  );
};

export default Footer;
