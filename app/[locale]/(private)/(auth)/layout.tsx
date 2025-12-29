export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center ">{children}</div>;
}
