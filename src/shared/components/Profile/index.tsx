'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { isLoggedIn, user, handleLogout } = useContext(Context);
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <Button
        onClick={() => router.push('/login')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ورود
      </Button>
    );
  }

  const capitalized = user?.userName?.trim()?.charAt(0)?.toUpperCase() ?? '';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{capitalized}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => router.push('/profile')}>
          پروفایل
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>خروج</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
