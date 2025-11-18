import { createContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      console.log('Loaded users:', data);
      setUsers(data);
    } catch (err) {
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Simple aur direct function
  const addUser = (userData) => {
    console.log('addUser called with:', userData);
    console.log('Current users array:', users);

    if (!userData || typeof userData !== 'object') {
      throw new Error('Invalid user data');
    }

    // Generate new ID
    let newId = 11; // JSONPlaceholder users 1-10 hote hain
    if (users && users.length > 0) {
      newId = Math.max(...users.map(u => u.id)) + 1;
    }

    const newUser = {
      id: newId,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      username: userData.username || '',
      website: userData.website || '',
    };

    console.log('New user object:', newUser);

    // Update state
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, newUser];
      console.log('Updated users array:', updatedUsers);
      return updatedUsers;
    });

    return newUser;
  };

  const updateUserData = (id, userData) => {
    setUsers(users.map(user =>
      user.id === parseInt(id) ? { ...user, ...userData } : user
    ));
  };

  const deleteUserData = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const value = {
    users,
    loading,
    addUser,
    updateUserData,
    deleteUserData
  };

  console.log('Context value:', value);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
