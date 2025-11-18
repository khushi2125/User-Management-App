import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

const UserForm = ({ user, onSubmit, isEdit = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    website: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        username: user.username || '',
        website: user.website || '',
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  const newErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    console.log('Form is valid, submitting:', formData);
    onSubmit(formData);  // ← यह call होना चाहिए
  } else {
    setErrors(newErrors);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white">
              {isEdit ? '✏️ Edit User' : '➕ Create New User'}
            </h2>
            <p className="text-blue-100 mt-2">Fill in the details below</p>
          </div>

          {/* Form Fields */}
          <div className="px-8 py-8 space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-300 hover:border-blue-400'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">✗ {errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300 hover:border-blue-400'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">✗ {errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-300 hover:border-blue-400'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-2">✗ {errors.phone}</p>}
            </div>

            {/* Username Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all"
                placeholder="johndoe"
              />
            </div>

            {/* Website Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 px-8 py-6 flex space-x-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 font-bold text-lg"
            >
              <FiCheck size={20} />
              <span>{isEdit ? 'Update User' : 'Create User'}</span>
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 font-bold text-lg"
            >
              <FiArrowLeft size={20} />
              <span>Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
