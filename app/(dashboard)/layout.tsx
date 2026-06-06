export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation layout incorporating the logo area */}
      <aside className="w-64 border-r">
        <div className="p-4 font-bold">Obsidia</div>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
