import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 flex flex-col items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
