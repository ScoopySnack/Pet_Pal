import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// κ.ά

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />         {/* 👈 homepage */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Άλλες σελίδες */}
            </Routes>
        </Router>
    );
}

export default App;
