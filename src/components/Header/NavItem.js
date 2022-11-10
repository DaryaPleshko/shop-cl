import { Link } from 'react-router-dom';
import header from './css/Header.module.css';
import { Button } from '@mui/material';

const NavItem = ({ title, url }) => {
  return (
    <Link to={url} className={header['nav-link']}>
      <Button variant="default">
        {title}
      </Button>
    </Link>
  );
};

export default NavItem;
