"use client";

import Link from "next/link";
import Flag from "react-flagkit";
import {
    Select,
    SelectContent, 
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function HomeFooter() {
    const t = useTranslations("footer");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = (lang: "ar" | "en") => {
        router.replace(pathname, { locale: lang });
    };

    return (
        <footer className="w-full border-t border-border">
            <div className="relative w-full lg:max-w-7xl lg:mx-auto">
                <div className="absolute top-0 lg:left-0 left-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
                <div className="absolute top-0 lg:right-0 right-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
            </div>
            <div className="w-full max-w-7xl mx-auto lg:px-10 px-4 py-12 lg:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="space-y-3">
                        <p className="text-xl font-semibold">{t("brand")}</p>
                        <p className="text-sm text-muted-foreground leading-tight max-w-sm">
                            {t("description")}
                        </p>
                        <Select value={locale} onValueChange={toggleLanguage}>
                            <SelectTrigger className="bg-background">
                                <SelectValue placeholder={t("language.placeholder")} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>{t("language.label")}</SelectLabel>
                                    <SelectItem value="en">
                                        <span className="flex flex-row items-center gap-x-2">
                                            <Flag country="US" size={20} className="rounded-[2px] outline outline-[#d7d7d7]" />
                                            <p>{t("language.english")}</p>
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="ar">
                                        <span className="flex flex-row items-center gap-x-2">
                                            <Flag country="SA" size={20} className="rounded-[2px] outline outline-[#d7d7d7]" />
                                            <p>{t("language.arabic")}</p>
                                        </span>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">{t("columns.product")}</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">{t("links.api")}</Link>
                            <Link href="#">{t("links.smtp_relay")}</Link>
                            <Link href="#">{t("links.dashboard")}</Link>
                            <Link href="#">{t("links.webhooks")}</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">{t("columns.resources")}</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">{t("links.documentation")}</Link>
                            <Link href="#">{t("links.status")}</Link>
                            <Link href="#">{t("links.guides")}</Link>
                            <Link href="#">{t("links.changelog")}</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">{t("columns.company")}</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">{t("links.about")}</Link>
                            <Link href="#">{t("links.security")}</Link>
                            <Link href="#">{t("links.privacy")}</Link>
                            <Link href="#">{t("links.contact")}</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">{t("columns.social")}</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>{t("links.discord")}</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>{t("links.x")}</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>{t("links.linkedin")}</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>{t("links.github")}</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>{t("links.facebook")}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-6 text-xs text-muted-foreground flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
                    <p>{t("copyright", { year: new Date().getFullYear() })}</p>
                    <p>{t("tagline")}</p>
                </div>
            </div>
        </footer>
    );
}
