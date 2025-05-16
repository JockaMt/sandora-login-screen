import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import { TermsOfUseContext } from './contexts/termsOfUseContext';
import { useState } from 'react';

function App() {
  const [termsOfUse, setTermsOfUse] = useState();

  return (
    <TermsOfUseContext.Provider value={{ termsOfUse, setTermsOfUse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </TermsOfUseContext.Provider>
  );
}

export default App;
