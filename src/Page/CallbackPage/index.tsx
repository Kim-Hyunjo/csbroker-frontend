import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { AUTHORIZTION, BEARER_TOKEN } from '../../constants/api';
import { URL } from '../../constants/url';
import { setUserInfo } from '../../utils/userInfo';

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) return;
    authApiWrapper.getUserData(token).then((res) => {
      apiClient.defaults.headers.common[AUTHORIZTION] = BEARER_TOKEN(token);
      setUserInfo({ ...res.data, accessToken: token });
      navigate(URL.MAIN);
    });
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
