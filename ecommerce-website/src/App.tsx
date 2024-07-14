import { Routes, Route } from 'react-router-dom'
import { Home, ProductCategory, ProductDetail } from './components'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<ProductCategory />} />
      <Route path="/:category/:productId" element={<ProductDetail />} />
    </Routes>
  )
}

export default App