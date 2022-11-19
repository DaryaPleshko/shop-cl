import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import header from './css/Header.module.css';
import NavItem from './NavItem';
import { useAuth } from '../../hooks/auth.hook';
import { Button } from '@mui/material';

const Header = () => {
  let titles = [{ title: 'About', url: '/about' }, { title: 'Contacts', url: '*' }, { title: 'Basket', url: '/bag' }];

  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <header className={header['nav-desktop-sticky']}>
      <nav className={header['nav-desktop']}>
        <Link to={'/'}>
          <h1 className={header['nav-logo-link']}>Sum-Store</h1>
        </Link>

        <div className={header['nav-links-center']}>
          {titles.map((item, index) => (
            <NavItem key={index} url={item.url} title={item.title} {...item} />
          ))}
        </div>

        {!isAuthenticated ? (
          <div className={header['nav-links-right']}>
            <Link to={'/login'} className={header['nav-link']}>
              <Button variant="default">Login</Button>
            </Link>
            <Link to={'/register'}>
              <Button variant="outlined" color="primary">
                Sign up
              </Button>
            </Link>
          </div>
        ) : (
          <div
            onClick={() => {
              logout();
              navigate('/');    
            }}
            className={header['nav-links-right']}
          >
            <Button variant="outlined" color="primary">
              Log out
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
