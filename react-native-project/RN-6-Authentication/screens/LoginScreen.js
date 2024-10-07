import { useContext, useEffect } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { loginHandler } from '../util/http';
import { AuthCtx } from '../store/auth-store';
import * as SecureStore from 'expo-secure-store';

function LoginScreen() {


  console.log(SecureStore.getItem('token'));


  const {setAuth} = useContext(AuthCtx);

  function loginHandler2(data){
    loginHandler(data)
    setAuth(true)
    
  }

  return <AuthContent isLogin  onAuthenticate={loginHandler2}/>;
}

export default LoginScreen;