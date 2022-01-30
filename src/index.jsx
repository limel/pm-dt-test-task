import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.scss';
import App from './App';

// const EmployerView = lazy(() =>
//   import('./App' /* webpackChunkName: "employer" */),
// );

// const WorkerView = lazy(() => import('./App' /* webpackChunkName: "worker" */));

// const HrView = lazy(() => import('./App' /* webpackChunkName: "hr" */));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
