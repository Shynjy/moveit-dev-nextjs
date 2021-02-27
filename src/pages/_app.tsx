import '../styles/global.scss';

import { AuthProvider } from '../contexts/auth';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}