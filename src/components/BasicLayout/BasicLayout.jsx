import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { CommonContainer } from './BasicLayout.styled';
export default function BasicLayout() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <CommonContainer>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </CommonContainer>
  );
}
