import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google'
import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, [])
  const getLayout = Component.getLayout || ((page) => page);
  return (
    // position="top-center" autoClose={2500}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SessionProvider session={session}> */}
        <main className={poppins.className}>
          <ToastContainer position="bottom-right" />
          {getLayout(<Component {...pageProps} />)}
        </main>
        {/* </SessionProvider> */}
      </PersistGate>
    </Provider>
  );
}