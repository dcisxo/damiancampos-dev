import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Damian Campos | Full Stack Developer",
  description:
    "Portfolio of Damian Campos, a full stack developer specializing in React, Node.js, and SQL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
