import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import UserDetail from '../components/UserDetail';
import Spinner from '../components/Spinner';

const UserDetailPage = () => {
  const { id } = useParams();
  const { users, loading } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find(u => u.id === parseInt(id));
    setUser(foundUser);
  }, [id, users]);

  if (loading) return <Spinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      {user ? (
        <UserDetail user={user} />
      ) : (
        <p className="text-center text-red-600">User not found!</p>
      )}
    </div>
  );
};

export default UserDetailPage;
