import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KomprApp",
    description: "Aplicación de compras colaborativas",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex min-h-screen">
                    <aside className="w-64 border-r">
                        <Sidebar />
                    </aside>
                    <main className="flex-1 p-4">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
