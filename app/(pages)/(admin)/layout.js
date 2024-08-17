export const metadata = {
  title: "Egon - Dashboard",
  description: "Egon by Mas Kumis Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
