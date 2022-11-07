import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';
import listOfCourses from './css/ListOfCourses.module.css';
import { useGetCoursesQuery } from '../../redux';

const ListOfCourses = () => {
  // const { data, error, isLoading } = useGetCoursesQuery('/course');
  const data = [
    {
      id: 1,
      title: 'Часы',
    },
    {
      id: 2,
      title: 'Наушники',
    },
    {
      id: 3,
      title: 'Телевизор',
    },
    {
      id: 4,
      title: 'Утюг',
    },
    {
      id: 5,
      title: 'Кружка',
    },
    {
      id: 6,
      title: 'Кофемашина',
    },
  ]

  return (
    <div className={listOfCourses['list_courses']}>
      <div className={listOfCourses['courses']}>
        {data && data.map((item) => <CourseItem key={item.id} title={item.title} {...item} />)}
      </div>
    </div>
  );
};

export default ListOfCourses;
