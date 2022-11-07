import { Link } from 'react-router-dom';
import ListOfCourses from '../../components/ListOfCourses/ListOfCourses';
import Header from '../../components/Header/Header';
import studentHomePage from './StudentHomePage.module.css';
import { Button } from '@mui/material';

const StudentHomePage = () => {
  
  return (
    <div className={studentHomePage['student-home']}>
      <Header></Header>
      <div className={studentHomePage['main-information-navagate']}>
        <div className={studentHomePage['left-nav']}>
          <Link to={'*'}>
            <Button variant="default">Main</Button>
          </Link>
          <Link to={'*'}>
            <Button variant="default">Catalog</Button>
          </Link>
          <Link to={'*'}>
            <Button variant="default">Status</Button>
          </Link>
          <Link to={'*'}>
            <Button variant="default">Discussions</Button>
          </Link>
          <Link to={'*'}>
            <Button variant="default">Literature</Button>
          </Link>
        </div>
        <div className={studentHomePage['main-information']}>
          <Link to={'*'}>
            <div className={studentHomePage['about-user']}>
              <div className={studentHomePage['img-user']}></div>
              <div className={studentHomePage['user-info']}>
                <div className={studentHomePage['user-name']}>Hanna</div>
                <div className={studentHomePage['user-email']}>anna-pleshko2000@mail.ru</div>
              </div>
              <div className={studentHomePage['link-profile']}>Go to profile...</div>
            </div>
          </Link>
          <ListOfCourses></ListOfCourses>
        </div>
      </div>
    </div>
  );
};

export default StudentHomePage;
