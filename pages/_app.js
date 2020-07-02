import "../src/assets/app.scss";
import { ToastContainer } from 'react-toastify';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}