import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='18044037169-devpbg29v38uj4lsddck1eicrq4o15cl.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
)
