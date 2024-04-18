import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Versiani Works",
  description: "Lading page made for Versiani Works Tech Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
