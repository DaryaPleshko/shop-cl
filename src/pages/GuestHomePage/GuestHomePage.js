import Footer from '../../components/Footer/Footer';
import GuestHomeSection from '../../components/GuestHomeSection/GuestHomeSection';
import Header from '../../components/Header/Header';
import ListOfCourses from '../../components/ListOfCourses/ListOfCourses';

const GuestHome = () => {


  return (
    <div>
      <Header></Header>
      <GuestHomeSection/>
      <ListOfCourses />
      <Footer></Footer>
    </div>
  );
};

export default GuestHome;
