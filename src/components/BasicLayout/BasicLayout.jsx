import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { CommonContainer } from './BasicLayout.styled';
export default function BasicLayout() {
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
