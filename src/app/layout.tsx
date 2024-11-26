import NextAuthProvider from "@/providers/NextAuthProvider/NextAuthProvider";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";

const iranSans = localFont({
  src: "./../assets/font.woff2",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html dir="rtl" lang={locale}>
      <body
        suppressHydrationWarning
        className={`${iranSans.className} bg-primary-100`}
      >
        <NextAuthProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
