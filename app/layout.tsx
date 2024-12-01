import type { Metadata } from "next";

import "./globals.css";
import Topbar from "./components/Topbar";



export const metadata: Metadata = {
  title: "Gabriel Silveira",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
