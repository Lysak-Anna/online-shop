import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/user/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return <>{!isUserLoggedIn ? <Navigate to={redirectTo} /> : Component}</>;
}
