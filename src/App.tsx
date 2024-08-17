import { Routes, Route } from 'react-router-dom'
import { Home, ProductCategory, ProductDetail, CheckoutForm } from './components'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<ProductCategory />} />
      <Route path="/:category/:productId" element={<ProductDetail />} />
      <Route path="/:category/:productId/checkout" element={<CheckoutForm />} />
    </Routes>
  )
}

export default App