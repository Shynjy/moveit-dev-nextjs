import '../styles/global.scss';

import ChallengesProvider from '../contexts/ChallengesContext';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}