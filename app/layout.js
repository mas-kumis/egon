import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata = {
  title: "Egon by Mas Kumis Dev",
  description: "Egon by Mas Kumis Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
