
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login'
import SignUp from './signUp/SignUp';
import LeadGeneration from './leadGeneration/LeadGeneration';

function App() {
  

  return (
    <>
    <BrowserRouter>
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
