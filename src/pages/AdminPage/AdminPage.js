import { useState } from 'react';
import NavAdmin from '../../components/NavAdmin/Nav.Admin';
import ContentAdmin from '../../components/ContentAdmin/ContentAdmin';
import style from './AdminPage.module.css';
import Header from '../../components/Header/Header';

const AdminPage = () => {
  const data = ['Users', 'Courses', 'Topics', 'Lessons'];

  const [currentItem, setCurrentItem] = useState('Users');

  return (
    <>
      <Header/>
      <div className={style['flex-items']}>
        <NavAdmin data={data} setCurrentItem={setCurrentItem} />
        <ContentAdmin currentItem={currentItem} />
      </div>
    </>
  );
};

export default AdminPage;
