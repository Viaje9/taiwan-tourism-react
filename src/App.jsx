import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { screenResize } from './store/screen/action'
import { NavBar } from '/src/components/NavBar'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onResize = () => {
      const size = { width: window.innerWidth, height: window.innerHeight }
      dispatch(screenResize(size));
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);

  return (
    <div>
      <NavBar />
    </div>
  )
}