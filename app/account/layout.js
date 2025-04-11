import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:grid md:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <main className="bg-background flex-1 overflow-y-auto px-4 py-2">
        {children}
      </main>
    </div>
  );
}
