import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Blog from './layouts/Blog';
import Contact from './layouts/Contact';
import Product from './layouts/Product';
import Headers from './components/Headers';
import Footer from './components/Footer';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </MantineProvider>
  );
}
