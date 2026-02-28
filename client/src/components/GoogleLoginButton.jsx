import {GoogleLogin,GoogleOAuthProvider} from '@react-oauth/google'
import Login from '../pages/Login'
const GoogleLoginButton = () => {

  return (
    <GoogleOAuthProvider clientId='18044037169-devpbg29v38uj4lsddck1eicrq4o15cl.apps.googleusercontent.com'>
      <Login />
    </GoogleOAuthProvider>
  )
}
<GoogleLogin onSuccess={credentialResponse=>{
  console.log(credentialResponse);
}}/>

export default GoogleLoginButton
