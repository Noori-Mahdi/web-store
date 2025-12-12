'use client';
import { Button } from '../shadcn';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { isLoggedIn, user } = useContext(Context);
  const ruote = useRouter();

  if (!isLoggedIn) {
    return (
      <Button
        onClick={() => ruote.push('/login')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ورود
      </Button>
    );
  }

  return <div>{user?.userName}</div>;
};

export default Profile;
