import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Toaster position="bottom-right" />
    </Provider>
  );
}

export default MyApp;
