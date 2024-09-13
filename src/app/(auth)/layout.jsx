import "./globals.css";
export const metadata = {
  title: "SignIn || SignUp ",
  description: "SignIn or SignUp to Netcico to get most out of it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
