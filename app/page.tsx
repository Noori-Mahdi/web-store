import { prisma } from '@/lib/prisma';

export default async function Home() {
  const products = await prisma.product.findMany();
  console.log(products, 'data');
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}
