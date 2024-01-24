import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideBar from "@/components/SideBar/SideBar";

import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Noct",
  description: "Task menager for creating your own goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} bg-bg-light h-screen w-full p-10 flex gap-2 justify-between overflow-hidden`}
      >
        <SideBar />

        <article className="w-[85%] lg:w-[79%] bg-main-light h-full overflow-y-auto rounded-lg shadow-lg shadow-blue-100 pt-12 pb-10 px-4">
          {children}
        </article>
      </body>
    </html>
  );
}
