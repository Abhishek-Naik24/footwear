import './App.css';
import '../src/assets/css/style.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/ionicons.min.css'
import './assets/css/icomoon.css'
// import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/flexslider.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/owl.theme.default.min.css'
import '../src/assets/css/bootstrap-datepicker.css'
import './assets/css/admin/loginform.css'
import './assets/css/admin/sidebar.css'
import './assets/css/admin/dashboard.css'
import './assets/css/admin/addproduct.css'
import './assets/css/loader.css'


import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';

// import Men from './component/Men';
// import Women from './component/Women';
// import About from './component/About';
// import Contact from './component/Contact';
// import Cart from './component/Cart';
import AdminLogin from './component/Admin/AdminLogin';
import Dashboard from './component/Admin/Dashboard';
import Sidebar from './component/Admin/Sidebar';
import AddProduct from './component/Admin/AddProduct';
import Products from './component/Admin/Products';
import Checkout from './component/Checkout';
import OrderComplete from './component/OrderComplete';
import ProductDetail from './component/ProductDetail';
import AllProducts from './component/AllProducts';
import React, { Suspense } from 'react';

let Home = React.lazy(() => import('./component/Home'))
let Men = React.lazy(() => import('./component/Men'))
let About = React.lazy(() => import('./component/About'))
let Women = React.lazy(() => import('./component/Women'))
let Cart = React.lazy(() => import('./component/Cart'))
let Contact = React.lazy(() => import('./component/Contact'))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Suspense fallback={<div className='colorlib-loader'></div>}><Home /></Suspense>} />
          <Route path='/mens' element={<Suspense fallback={<div className='colorlib-loader'></div>}><Men /></Suspense>} />
          <Route path='/womens' element={<Suspense fallback={<div className='colorlib-loader'></div>}><Women /></Suspense>} />
          <Route path='/about' element={<Suspense fallback={<div className='colorlib-loader'></div>}><About /></Suspense>} />
          <Route path='/contact' element={<Suspense fallback={<div className='colorlib-loader'></div>}><Contact /></Suspense>} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/sidebar' element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='products' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Suspense fallback={<div className='colorlib-loader'></div>}><Cart /></Suspense>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/thankyou' element={<OrderComplete />} />
          <Route path='/productdetail' element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;