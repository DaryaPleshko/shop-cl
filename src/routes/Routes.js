import { Routes, Route } from 'react-router-dom';
import GuestHome from '../pages/GuestHomePage/GuestHomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import ShopBagPage from '../pages/ShopBagPage/ShopBagPage';
import AboutStorePage from '../pages/AboutStorePage/AboutStorePage';

export const RoutesTest = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <Routes>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestHome />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/bag" element={<ShopBagPage />}></Route>
        <Route path="/about" element={<AboutStorePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
