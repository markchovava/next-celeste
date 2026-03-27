import type { Metadata } from "next";
import "./globals.css";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterDefault from "./(main)/_components/footers/FooterDefault";
import Header from "./(main)/_components/headers/Header";


export const metadata: Metadata = {
  title: "Celeste Energy",
  description: "Celeste Energy",
  keywords: ["Celeste Energy",],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}>
        <Header />
        {children}
        <FooterDefault />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" 
        />
      </body>
    </html>
  );
}
