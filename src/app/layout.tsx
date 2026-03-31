import type { Metadata } from "next";
import "./globals.css";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterDefault from "./(main)/_components/footers/FooterDefault";
import Header from "./(main)/_components/headers/Header";


export const metadata: Metadata = {
  title: "Celeste Energy",
  description: "We are dedicated to harnessing the power of the sun to provide sustainable energy solutions.",
  keywords: ["Celeste Energy", 'solar energy', 'irrigation', 'borehole'],
  verification: {
    google: 'uzEnE4Z0slrSXHljnm7EKx2ZivfC8FgjZVlFUFXPGUY',
  },
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
