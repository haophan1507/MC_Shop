import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './layouts/Login';
import DashboardIndex from './layouts/Dashboard';
import Category from './layouts/Category';
import DashBoard from './layouts/Dashboard/DashBoard';
import Order from './layouts/Order';
import Review from './layouts/Review';
import User from './layouts/User';
import Blog from './layouts/Blog';
import { useLocalStorage } from '@mantine/hooks';

function Admin() {
  const [value] = useLocalStorage({ key: 'admin' });

  return (
    <Routes>
      {value && (
        <Route path="" element={<DashboardIndex />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/review" element={<Review />} />
          <Route path="/user" element={<User />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to={'/admin/login'} />} />
    </Routes>
  );
}

export default Admin;
