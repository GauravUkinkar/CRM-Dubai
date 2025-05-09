
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login'
import SignUp from './signUp/SignUp';
import LeadGeneration from './leadGeneration/LeadGeneration';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/leadGeneration" element={<LeadGeneration />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
