import './App.scss';
import Header from './layout/Header';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AuthProvider from './context/common/Provider';
import Footer from 'layout/Footer/Footer';
// import SummariesView from './Views/SummariesView/SummariesView';

const EmployerView = lazy(() => import('./Views/Employer' /* webpackChunkName: "employer" */));

const WorkersView = lazy(() => import('./Views/Workers' /* webpackChunkName: "worker" */));

const HrView = lazy(() => import('./Views/Hr' /* webpackChunkName: "hr" */));

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Suspense fallback="loading">
          <Routes>
            <Route path="/workers" element={<WorkersView />} />
            <Route path="/" element={<EmployerView />} />
            <Route path="/hr" element={<HrView />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </AuthProvider>
  );
}
