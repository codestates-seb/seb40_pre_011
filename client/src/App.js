import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingComponent from './components/Loading/Loading';

const Mainpage = React.lazy(() => import('./pages/Main/Mainpage'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage'));
const LogoutPage = React.lazy(() => import('./pages/Logout/LogoutPage'));
const Signup = React.lazy(() => import('./pages/Signup/Signup'));
const Questions = React.lazy(() => import('./pages/Questions/Questions'));
const QuestionDetail = React.lazy(() =>
  import('./pages/QuestionDetail/QuestionDetail'),
);

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/questionBoard" element={<Questions />} />
        <Route path="/questionBoard/Detail" element={<QuestionDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
