import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Fruits from './components/Fruits/Fruits';
import Dairy from './components/Dairy/Dairy';
import SeaFood from './components/Seafood/Seafood';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="seaFood" element={<SeaFood />} />
          <Route path="allproducts" element={<AllProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;