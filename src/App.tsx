import { ToastContainer } from 'react-toastify';
import Router from './Router';
import { appStyle } from './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from './hooks/useStore';
import { useEffect } from 'react';
import { getUserInfo } from './utils/userInfo';
import { setTokenHeader } from './api/setTokenHeader';
function App() {
  const { setIsLogin } = useAuthStore();

  useEffect(() => {
    console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const userInfo = getUserInfo();
    if (userInfo) {
      setIsLogin(true);
      setTokenHeader();
    }
  }, []);

  return (
    <div className={`App ${appStyle}`}>
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
