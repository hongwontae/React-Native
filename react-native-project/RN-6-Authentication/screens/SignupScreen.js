import AuthContent from '../components/Auth/AuthContent';
import {signupHandler} from '../util/http'
import {Alert} from 'react-native'

function SignupScreen({navigation}) {

  async function customHandler(data){
    await signupHandler(data)
    Alert.alert('Login 페이지로 이동할게요', '회원가입이 성공했습니다.' )
    navigation.replace('Login')
  }


  return <AuthContent onAuthenticate={customHandler}/>;
}

export default SignupScreen;