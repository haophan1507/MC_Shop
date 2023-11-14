import { Route, Routes } from 'react-router-dom';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';

function index() {
  return (
    <Routes>
      <Route path=":name/product-detail" element={<ProductDetail />} />
      <Route path=":name" element={<ListProduct />} />
    </Routes>
  );
}

export default index;
