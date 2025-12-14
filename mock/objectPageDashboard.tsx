import { CreditCard, ImagePlus, ShoppingCart, Tags, Users } from 'lucide-react';

export const dashboardMenuItems: {
  label: string;
  name: string;
  icon: React.ReactNode;
}[] = [
  {
    label: 'کالاها',
    name: 'products',
    icon: <ShoppingCart size={16} />,
  },
  {
    label: 'کاربران',
    name: 'users',
    icon: <Users size={16} />,
  },
  {
    label: 'دسته‌بندی‌ها',
    name: 'categories',
    icon: <Tags size={16} />,
  },
  {
    label: 'بنرها',
    name: 'banners',
    icon: <ImagePlus size={16} />,
  },
  { label: 'فروش', name: 'sales', icon: <CreditCard size={16} /> },
];
