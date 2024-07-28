import React from 'react';
import { BrowserRouter as Router, Route, Link, RouterProvider } from 'react-router-dom';
import { router } from './presentation      ';
import { Provider } from 'react-redux';
import { store } from './redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
