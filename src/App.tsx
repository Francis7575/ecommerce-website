import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingPage from './pages/Loading';
import { Home, ProductCategory, ProductDetail, CheckoutForm, Layout } from './components';

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<ProductCategory />}>
          <Route path=":productId" element={<ProductDetail />} />
          <Route path=":category/:productId/checkout" element={<CheckoutForm />} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App