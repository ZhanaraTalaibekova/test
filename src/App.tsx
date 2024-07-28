import React from 'react';
import { BrowserRouter as Router, Route, Link, RouterProvider } from 'react-router-dom';
import { router } from './presentation      ';
import { Provider } from 'react-redux';
import { store } from './redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './i18n';

// jest потом не забудь и настрой eslint и иконки перепиши  разберись с i18next
// цвета в одно переведи еще пути надо сделать  короче
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}

export default App;
