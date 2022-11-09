import { Routes, Route } from 'react-router-dom';
import GuestHome from '../pages/GuestHomePage/GuestHomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationStudentPage from '../pages/RegistrationStudentPage/RegistrationStudentPage';
import SingleCoursePage from '../pages/SingleCoursePage/SingleCoursePage';

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
        <Route path="/register" element={<RegistrationStudentPage />}></Route>
        <Route path="/product/:id/" element={<SingleCoursePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
