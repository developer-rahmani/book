import NextAuthProvider from "@/providers/NextAuthProvider/NextAuthProvider";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

const mainFont = localFont({
  src: "./../../assets/font.woff2",
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>

      <body
        suppressHydrationWarning
        className={`${mainFont.className} bg-primary-100`}
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
