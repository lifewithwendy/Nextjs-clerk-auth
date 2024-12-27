import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "../components/Loader";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth",
  description: "Next auth with clerk and mongodb",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={inter.className}
        >
          <ClerkLoading>
            <div className="flex justify-center items-center h-screen">
              <Loader />
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Header /> 

          {children}

          </ClerkLoaded>
        </body>
        </html>
    </ClerkProvider>
  );
}
