import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Poppins } from 'next/font/google'

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
    <main className={poppins.className}>
      <ToastContainer position="bottom-right" />
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
