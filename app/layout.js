import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
    title: "Portal Berita",
    description: "Portal Berita",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`max-w-[1600px] mx-auto`}>
                {children}
            </body>
        </html>
    );
}
