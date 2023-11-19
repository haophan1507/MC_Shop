import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Route, Routes } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import Home from './layouts/Home';
import Blog from './layouts/Blog';
import Contact from './layouts/Contact';
import Product from './layouts/Product';
import Headers from './components/Headers';
import Footer from './components/Footer';
import Auth from './layouts/Auth';
import Admin from './layouts/Admin';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <Footer />

      <Notifications position="top-center" />
    </MantineProvider>
  );
}
