import { Route, Routes } from 'react-router-dom';
import ListProduct from './ListProduct';

function index() {
  return (
    <Routes>
      <Route path=":name" element={<ListProduct />} />
    </Routes>
  );
}

export default index;
