import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { DirectionProvider } from "@/components/ui/direction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Eleventeen | Best and easiest email service for developers",
    description:
      "Send, monitor, and scale transactional emails with developer-first APIs, modern SDKs, and reliable delivery insights.",
  },
  ar: {
    title: "إليفنتين | أفضل وأسهل خدمة بريد للمطورين",
    description:
      "أرسل وراقب ووسّع البريد المعاملاتي عبر واجهات API موجّهة للمطورين وحزم SDK حديثة ورؤى موثوقة للتسليم.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localized = metadataByLocale[locale] ?? metadataByLocale.en;

  return {
    title: localized.title,
    description: localized.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${isArabic ? notoSansArabic.className : ""} antialiased bg-sidebar`}
      >
        <NextIntlClientProvider>
          <DirectionProvider dir={isArabic ? "rtl" : "ltr"} direction={isArabic ? "rtl" : "ltr"}>
            {children}
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
