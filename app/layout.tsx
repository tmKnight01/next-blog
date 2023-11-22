import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/store/ThemeStore";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-blog",
  description: "blog of tmKnight",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning={true} className="  w-full ">
      <body
        className={
          "bg-white dark:bg-slate-800 flex overflow-x-hidden overflow-y-auto flex-col items-center"
        }
        style={{ height: "100%", width: "100%" }}
      >
        <Providers>
          <>
            <Header />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
