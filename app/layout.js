import Header from "@/components/Header";
import "../styles/globals.css";

export const metadata = {
  title: "CRYPTO BANK",
  description: "Generated by CRYPTO BANK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`px-5 text-sm`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
