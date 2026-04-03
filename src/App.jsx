import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Login from './page/Login'
import ProductAll from './page/ProductAll'
import ProductDetail from './page/ProductDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PrivateRoute from './route/PrivateRoute'
import { ToastContainer, Toast } from 'react-bootstrap'

//1. 전체 상품 페이지, 로그인, 상품상세
//2. 전체 상품 : 전체 상품을 볼 수 있다
//3. 로그인 페이지 : 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3-2. 상품 디테일을 눌렀으나 로그인이 안되어 있는 경우 로그인 페이지가 나온다.
//4. 로그인 성공 시 : 로그인 페이지에서 로그인 성공 시 전체 상품 페이지로 이동한다.
//5. 상품 상세 페이지 : 로그아웃을 클릭하면 로그아웃이 되고 로그인 페이지로 리다이렉션 한다.
//6. 로그인을 하면 로그아웃이 보이고, 로그아웃 하면 로그인이 보인다.
//7. 상품 검색 기능

function App() {
  const [authenticate, setAuthenticate] = useState(false)   //true = 로그인, false = 로그아웃
  const [toastMessage, setToastMessage] = useState('')
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} setToastMessage={setToastMessage} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} setToastMessage={setToastMessage} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} setAuthenticate={setAuthenticate} />} />
      </Routes>

      <ToastContainer className='mt-3' position='top-center' show={toastMessage !== ''} onClose={() => setToastMessage('')}>
        <Toast show={toastMessage !== ''} onClose={() => setToastMessage('')} delay={2000} autohide>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
    
    
  )
}

export default App
