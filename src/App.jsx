import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { screenResize } from './store/screen/action';
import { Routes, Route } from 'react-router-dom';
import NavBar from '/src/components/NavBar/NavBar';
import TourismRouter from './router/TourismRouter'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onResize = () => {
      const size = { width: window.innerWidth, height: window.innerHeight };
      dispatch(screenResize(size));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <TourismRouter/>
    </div>
  );
}
