import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomePage from './pages/HomePage/HomePage';
import BasicLayout from './components/BasicLayout/BasicLayout';
import NotFound from './components/NotFound/NotFound';
const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage/ProductDetailPage')
);
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const Account = lazy(() => import('./pages/Account/Account'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="account"
              element={
                <PrivateRoute redirectTo="/login" component={<Account />} />
              }
            />
            <Route path="product/:productId" element={<ProductDetailPage />} />
            <Route
              path="cart"
              element={
                <PrivateRoute redirectTo="/login" component={<Cart />} />
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-center" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
