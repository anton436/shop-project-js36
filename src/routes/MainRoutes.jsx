import React from 'react'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import AboutPage from '../pages/AboutPage'
import AdminPage from '../pages/AdminPage'
import NotFoundPages from '../pages/NotFoundPages'
import ContactPage from '../pages/ContactPage'
import { Route, Routes } from 'react-router-dom'
import EditPage from '../pages/EditPage'
import CartPage from '../pages/CartPage'

const PUBLIC_ROUTES = [
    {id:1, link: '/', element: <HomePage />},
    {id:2, link: '/products', element: <ProductPage />},
    {id:3, link: '/contacts', element: <ContactPage />},
    {id:4, link: '/about', element: <AboutPage />},
    {id:5, link: '/admin', element: <AdminPage />},
    {id:6, link: '*', element: <NotFoundPages />},
    {id:7, link: '/edit/:id', element: <EditPage />},
    {id:8, link: '/cart', element: <CartPage />},
]

const MainRoutes = () => {
  return (
    <Routes>
        {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element}/>
        ))}
    </Routes>
  )
}

export default MainRoutes