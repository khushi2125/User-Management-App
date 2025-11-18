import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { FiPlus, FiUsers } from 'react-icons/fi';

const HomePage = () => {
  const { users, loading, deleteUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUserData(id);
      alert('User deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FiUsers size={32} className="text-white" />
            <h1 className="text-3xl font-bold text-white">User Hub</h1>
          </div>
          <button
            onClick={() => navigate('/create')}
            className="bg-white text-blue-600 px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 font-bold flex items-center space-x-2 hover:bg-blue-50"
          >
            <FiPlus size={20} />
            <span>Add User</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <p className="text-blue-100 text-sm font-semibold">Total Users</p>
            <p className="text-4xl font-bold mt-2">{users.length}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
            <p className="text-green-100 text-sm font-semibold">Active</p>
            <p className="text-4xl font-bold mt-2">{users.length}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <p className="text-purple-100 text-sm font-semibold">Managed</p>
            <p className="text-4xl font-bold mt-2">✓</p>
          </div>
        </div>

        {/* Users Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">👥 All Users</h2>
          {loading ? <Spinner /> : <UserList users={users} onDelete={handleDelete} loading={loading} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
