import "./globals.css";
import { Navigation } from "./components/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <SpeedInsights />
      </body>
    </html>
  );
}
