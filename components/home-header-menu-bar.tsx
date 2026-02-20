"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { EqualSignIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeHeaderMenuBar() {
    const tHeader = useTranslations("header");
    const tMobile = useTranslations("mobile_menu");

    const components: { title: string; href: string; description: string }[] = [
        {
            title: tHeader("product_menu.email_api.title"),
            href: "https://doc.eleventeen.net/email-api",
            description: tHeader("product_menu.email_api.description"),
        },
        {
            title: tHeader("product_menu.webhooks.title"),
            href: "https://doc.eleventeen.net/webhooks",
            description: tHeader("product_menu.webhooks.description"),
        },
        {
            title: tHeader("product_menu.domains.title"),
            href: "https://doc.eleventeen.net/domains",
            description: tHeader("product_menu.domains.description"),
        },

        {
            title: tHeader("getting_started_menu.quickstart.title"),
            href: "https://doc.eleventeen.net/quickstart",
            description: tHeader("getting_started_menu.quickstart.description"),
        },
        {
            title: tHeader("getting_started_menu.api_keys.title"),
            href: "https://doc.eleventeen.net/api-keys",
            description: tHeader("getting_started_menu.api_keys.description"),
        },
        {
            title: tMobile("custom_domain.title"),
            href: "https://doc.eleventeen.net/domains",
            description: tMobile("custom_domain.description"),
        },
    ];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden block justify-center items-center" variant={'ghost'} size={'icon'}>
                    <HugeiconsIcon icon={EqualSignIcon} strokeWidth={2} className="size-5"/>
                </Button>
            </SheetTrigger>
            <SheetContent
                showCloseButton={false}
                side="top"
                className="data-[side=top]:top-24 mx-1 data-[side=top]:ring ring-border shadow-2xl rounded-t-3xl data-[side=top]:h-[calc(100dvh-3.5rem)] data-[side=top]:max-h-none data-[side=top]:border-none overflow-y-auto px-4"
            >
                <SheetHeader className="hidden">
                    <SheetTitle />
                    <SheetDescription  />
                </SheetHeader>
                <ul className="flex flex-col gap-2 pt-8">
                    {components.map((component) => (
                        <li key={component.title}>
                            <Link
                                href={component.href}
                                className="flex flex-col gap-1 bg-background p-3"
                            >
                                <div className="leading-none font-medium">{component.title}</div>
                                <div className="text-muted-foreground text-sm line-clamp-2">{component.description}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}
