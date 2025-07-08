import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Categories from './pages/Categories.jsx';
import Contact from './pages/Contact.jsx';
import Faq from './pages/Faq.jsx';
import Commande from './pages/Commande.jsx';
import Item from './pages/Item.jsx';
import SearchPage from './components/searchpage/SearchPage.jsx';
import Thanks from './pages/Thanks.jsx';
import Livraison from './pages/Livraison.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='categories/:id' element={<Categories />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='faq' element={<Faq />} />
      <Route path='commande' element={<Commande />} />
      <Route path='item/:id' element={<Item />} />
      <Route path='search' element={<SearchPage />} />
      <Route path='thanks' element={<Thanks />} />
      <Route path='livraison' element={<Livraison />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
