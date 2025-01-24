import { AppSidebar } from "@/components/side-menu/Sidebar";
import { Public_Sans } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { PanelLeft } from "lucide-react";
import { type Metadata } from "next";

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
      <body className="overflow-hidden h-screen">
        {" "}
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger>
              <PanelLeft />
              <span className="sr-only">Toggle Sidebar</span>
            </SidebarTrigger>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
