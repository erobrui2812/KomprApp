import Sidebar from "@/components/Sidebar";

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <aside>
                <Sidebar />
            </aside>
            <main className="p-4">
                {children}
            </main>
        </>
    );
}

export default AppLayout;
