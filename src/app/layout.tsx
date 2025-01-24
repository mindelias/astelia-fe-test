import { AppSidebar } from "@/components/side-menu/Sidebar";
import { Public_Sans } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";

import "@/styles/globals.css";

import { type Metadata } from "next";
import { CustomTrigger } from "@/components/side-menu/SidebarTrigger";

const publicSans = Public_Sans({
  subsets: ["latin"], // Adjust subsets as needed
  weight: ["400", "600", "700", "900"], // Specify weights (optional)
  variable: "--font-public-sans", // Adds CSS variable
  display: "swap", // Ensures fallback fonts are displayed immediately
});

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={publicSans.className}>
      <body className="h-screen overflow-hidden">
        {" "}
        <SidebarProvider>
          <AppSidebar />
          <main>
            <div className="sticky top-4 z-50">
              <CustomTrigger />
            </div>

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
