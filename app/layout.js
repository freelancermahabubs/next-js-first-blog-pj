"use client";
import TopNav from "@/components/TopNav";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import {SessionProvider} from "next-auth/react";

export const metadata = {
  title: "mhabubblog",
  description: "mhabubblog",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <TopNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
