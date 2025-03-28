import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SigninPage from './pages/SigninPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignUpPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/signin' element={<SigninPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;