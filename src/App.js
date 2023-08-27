
import './App.css';
import { ForgotPassword } from './components/ForgotPassword';
import { Login } from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>

    </div>
  )
}

export default App;
