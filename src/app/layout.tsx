import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import cn from "classnames";
import { LoadingProvider } from "./providers/LoadingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatPDF",
  description: "Chat with your PDF files!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "w-[100vw] h-[100vh] relative dark bg-slate-900",
        )}
      >
        <Theme className="h-full w-full" accentColor="jade">
          <LoadingProvider>
            <div className="h-full flex flex-col">
              <div className="flex-1">{children}</div>
              <footer className="h-14 bg-stone-900 text-center flex items-center justify-center text-stone-500">
                Built with ❤️ by Ariel Weinberger - OpenAI Bootcamp For
                JavaScript Developers
              </footer>
            </div>
          </LoadingProvider>
        </Theme>
      </body>
    </html>
  );
}
