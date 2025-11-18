import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import UserForm from '../components/UserForm';
import Spinner from '../components/Spinner';

const CreateUserPage = () => {
  const navigate = useNavigate();
  const { addUser, users } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleCreate = (userData) => {
    try {
      setLoading(true);

      console.log('Form data received:', userData);
      console.log('Current users:', users);

      // ✅ Direct add karo bina API call
      if (!userData.name || !userData.email || !userData.phone) {
        throw new Error('Please fill all required fields');
      }

      // ✅ Call addUser function
      const result = addUser(userData);
      console.log('User added:', result);

      alert('✅ User created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 500);

    } catch (err) {
      console.error('Full error:', err);
      alert(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Spinner /> : <UserForm onSubmit={handleCreate} />}
    </div>
  );
};

export default CreateUserPage;
