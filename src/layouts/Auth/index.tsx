import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Address from './Address';
import ChangePassword from './ChangePassword';
import FavoriteProduct from './FavoriteProduct';
import MyOrder from './MyOrder';
import Settings from './Settings';

const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/address" element={<Address />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/favorite-product" element={<FavoriteProduct />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Auth;
