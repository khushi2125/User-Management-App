import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';

const UserDetail = ({ user }) => {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center text-gray-600 py-12">
        Loading user details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition"
        >
          <FiArrowLeft size={20} />
          <span>Back to Users</span>
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">{user.name}</h1>
                <p className="text-blue-100 text-lg mt-2">@{user.username}</p>
              </div>
              <button
                onClick={() => navigate(`/edit/${user.id}`)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center space-x-2 font-semibold"
              >
                <FiEdit2 size={20} />
                <span>Edit</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition">
                <div className="flex items-center space-x-3 mb-2">
                  <FiMail className="text-blue-600" size={24} />
                  <p className="text-gray-600 font-semibold">Email</p>
                </div>
                <p className="text-gray-800 text-lg break-all">{user.email}</p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition">
                <div className="flex items-center space-x-3 mb-2">
                  <FiPhone className="text-green-600" size={24} />
                  <p className="text-gray-600 font-semibold">Phone</p>
                </div>
                <p className="text-gray-800 text-lg">{user.phone}</p>
              </div>

              {/* Website */}
              {user.website && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition">
                  <div className="flex items-center space-x-3 mb-2">
                    <FiGlobe className="text-purple-600" size={24} />
                    <p className="text-gray-600 font-semibold">Website</p>
                  </div>
                  <p className="text-gray-800 text-lg break-all">{user.website}</p>
                </div>
              )}

              {/* Company */}
              {user.company && (
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition">
                  <p className="text-gray-600 font-semibold mb-2">Company</p>
                  <p className="text-gray-800 text-lg font-bold">{user.company.name}</p>
                  <p className="text-gray-700 text-sm mt-1">{user.company.catchPhrase}</p>
                </div>
              )}
            </div>

            {/* Address Section */}
            {user.address && (
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📍 Address</h3>
                <div className="text-gray-700 space-y-2">
                  <p className="font-semibold">{user.address.street}, {user.address.suite}</p>
                  <p>{user.address.city} - {user.address.zipcode}</p>
                  {user.address.geo && (
                    <p className="text-sm text-gray-600">
                      Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
