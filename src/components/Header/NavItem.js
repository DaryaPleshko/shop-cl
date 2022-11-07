import { Link } from 'react-router-dom';
import header from './css/Header.module.css';
import { Button } from '@mui/material';

const NavItem = ({ title }) => {
  return (
    <Link to={'*'} className={header['nav-link']}>
      <Button variant="default">
        {title}
      </Button>
    </Link>
  );
};

export default NavItem;
