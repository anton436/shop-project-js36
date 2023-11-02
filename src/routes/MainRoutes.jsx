import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import EditPage from '../pages/EditPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductPage from '../pages/ProductPage';

const PUBLIC_ROUTES = [
  { id: 1, link: '/', element: <HomePage /> },
  { id: 2, link: '/products', element: <ProductPage /> },
  { id: 3, link: '/contacts', element: <ContactPage /> },
  { id: 4, link: '/about', element: <AboutPage /> },
  { id: 5, link: '/admin', element: <AdminPage /> },
  { id: 6, link: '*', element: <NotFoundPage /> },
  { id: 7, link: '/edit/:id', element: <EditPage /> },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
