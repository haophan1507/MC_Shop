import { Route, Routes } from 'react-router-dom';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';
import SearchProduct from './SearchProduct';
import Cart from './Cart';
import Payment from './Payment';
import Success from './Success';

function index() {
  return (
    <Routes>
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
      <Route path=":name/product-detail" element={<ProductDetail />} />
      <Route path=":name" element={<ListProduct />} />
    </Routes>
  );
}

export default index;
