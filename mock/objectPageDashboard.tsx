import {
  CreditCard,
  Grid2x2,
  ImagePlus,
  ShoppingCart,
  Tags,
  Users,
} from 'lucide-react';

export const dashboardMenuItems: {
  label: string;
  name: string;
  icon: React.ReactNode;
}[] = [
  {
    label: 'dashboard',
    name: 'dashboard',
    icon: <Grid2x2 size={18} />,
  },
  {
    label: 'sold',
    name: 'sold',
    icon: <CreditCard size={18} />,
  },
  {
    label: 'products',
    name: 'products',
    icon: <ShoppingCart size={18} />,
  },
  {
    label: 'users',
    name: 'users',
    icon: <Users size={18} />,
  },
  {
    label: 'categories',
    name: 'categories',
    icon: <Tags size={18} />,
  },
  {
    label: 'banners',
    name: 'banners',
    icon: <ImagePlus size={18} />,
  },
];
