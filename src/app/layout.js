import "./globals.css";
import { Navigation } from "./components/navigation";

export const metadata = {
  title: "Portfolio",
  description: "My app",
  keywords: "react, nextjs, tailwindcss",
  keywords: "Horváth Levente",
  author: "Horváth Levente",
  lang: "en",
  lang: "hu",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
