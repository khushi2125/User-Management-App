import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import UserForm from '../components/UserForm';
import Spinner from '../components/Spinner';
import { updateUser } from '../services/api';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUserData } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundUser = users.find(u => u.id === parseInt(id));
    setUser(foundUser);
    setLoading(false);
  }, [id, users]);

  const handleUpdate = async (userData) => {
    try {
      setLoading(true);
      
      // API ko call karo
      await updateUser(id, userData);
      
      // Local state update karo
      updateUserData(parseInt(id), userData);
      
      alert('User updated successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to update user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      {user ? (
        <UserForm user={user} onSubmit={handleUpdate} isEdit={true} />
      ) : (
        <p className="text-center text-red-600">User not found!</p>
      )}
    </div>
  );
};

export default EditUserPage;
