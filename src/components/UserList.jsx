import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';


const UserList = ({ users, onDelete, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse text-gray-600">Loading users...</div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No users found. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid View - Better for Modern UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h3 className="text-white font-bold text-lg truncate">{user.name}</h3>
              <p className="text-blue-100 text-sm">@{user.username}</p>
            </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-gray-400 text-sm">📧</span>
                <p className="text-gray-700 text-sm break-all">{user.email}</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="text-gray-400 text-sm">📱</span>
                <p className="text-gray-700 text-sm">{user.phone}</p>
              </div>

              {user.company && (
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">🏢</span>
                  <p className="text-gray-700 text-sm">{user.company.name}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex space-x-2">
              <button
                onClick={() => navigate(`/user/${user.id}`)}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-1 font-semibold text-sm"
              >
                <FiEye size={16} />
                <span>View</span>
              </button>
              
              <button
                onClick={() => navigate(`/edit/${user.id}`)}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-1 font-semibold text-sm"
              >
                <FiEdit2 size={16} />
                <span>Edit</span>
              </button>
              
              <button
                onClick={() => onDelete(user.id)}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-1 font-semibold text-sm"
              >
                <FiTrash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
