import { Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import ListBlog from './ListBlog';

function index() {
  return (
    <Routes>
      <Route path="/blog-detail" element={<BlogDetail />} />
      <Route path="*" element={<ListBlog />} />
    </Routes>
  );
}

export default index;
