import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SideBar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  //   icons: {
  //     icon: "/favicon.ico",
  //     shortcut: "/favicon-16x16.png",
  //     apple: "/apple-touch-icon.png",
  //   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <div className=" flex flex-col dark:bg-neutral-900  bg-zinc-100 min-h-screen">
            <div className="container mx-auto max-w-4xl px-6 flex h-full ">
              <SideBar />
              <MainContent>{children}</MainContent>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
