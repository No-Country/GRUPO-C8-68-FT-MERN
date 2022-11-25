import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppContainer } from './AppGlobalStyles';
import { DefaultFooter } from './Components/footer/default-footer';
import { DefaultNavbar } from './Components/navbar/default-navbar';
import Card from './pages/Card';
import CreateNewPassword from './pages/CreateNewPassword';
import { DetailPage } from './pages/DetailPage';
import ForgotPassword from './pages/ForgotPassword';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';
import Library from './pages/Library';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Purchases from './pages/Purchases';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <DefaultNavbar />
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/games' element={<GamesPage/>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/createNewPassword' element={<CreateNewPassword />} />
              <Route path='/register' element={<RegisterPage />} /> 
              <Route path='/detail/:id' element={<DetailPage/>} /> 
              <Route element={<ProtectedRoutes />}>
                <Route path='/cart' element={<Card />} />
                <Route path='/library' element={<Library />} />
                <Route path='/purchases' element={<Purchases />} />
              </Route>
            </Routes>
        <DefaultFooter />
      </AppContainer>
    </HashRouter>
  );
}

export default App;