import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         style={{ 
//           backgroundColor: '#1A1A1A',
//         }}

//       >
//         <Header />
//         {children}
//         <Footer />

//       </body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: '#1A1A1A',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // це головне
          margin: 0,
        }}
      >
        <Header />

        <main style={{ flex: 1 }}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
