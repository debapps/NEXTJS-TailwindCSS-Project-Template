import Head from "next/head";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";
import AlertProvider from "./context/alert/AlertProvider";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <body>
                <AlertProvider>
                    <AuthProvider>
                        <Header />
                        {children}
                        <Footer />
                    </AuthProvider>
                </AlertProvider>
            </body>
        </html>
    );
}
