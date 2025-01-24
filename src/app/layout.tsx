import { AppSidebar } from "@/components/side-menu/Sidebar";
import { Public_Sans } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";

import "@/styles/globals.css";

import { type Metadata } from "next";
import { CustomTrigger } from "@/components/side-menu/SidebarTrigger";
import { ErrorBoundary } from "@/components/error-boundary/ErrorBoundary";

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
            <ErrorBoundary
              fallback={
                <div className="p-4 text-center text-red-500">
                  <h1 className="text-xl font-semibold">Oops!</h1>
                  <p>Something went wrong. Please try again.</p>
                </div>
              }
            >
              {children}
            </ErrorBoundary>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
