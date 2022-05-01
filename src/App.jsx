import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { screenResize } from './store/screen/action';
import { Routes, Route } from 'react-router-dom';
import NavBar from '/src/components/navBar/NavBar';
import Home from '/src/view/home/Home';

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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<div>2</div>} />
        <Route path='/dashboard' element={<div>3</div>} />
      </Routes>
    </div>
  );
}
