import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import EditUserPage from './pages/EditUserPage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateUserPage />} />
            <Route path="/edit/:id" element={<EditUserPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
