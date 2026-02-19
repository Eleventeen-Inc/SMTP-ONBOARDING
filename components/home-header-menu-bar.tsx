"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { EqualSignIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function HomeHeaderMenuBar() {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Email API",
            href: "https://doc.eleventeen.net/email-api",
            description: "Send transactional emails with simple API calls.",
        },
        {
            title: "Webhooks",
            href: "https://doc.eleventeen.net/webhooks",
            description: "Receive delivery, bounce, and complaint events.",
        },
        {
            title: "Domains",
            href: "https://doc.eleventeen.net/domains",
            description: "Verify your sending domains and DNS records.",
        },

        {
            title: "Quickstart",
            href: "https://doc.eleventeen.net/quickstart",
            description: "Send your first email in under 5 minutes.",
        },
        {
            title: "API Keys",
            href: "https://doc.eleventeen.net/api-keys",
            description: "Create and manage secure API keys.",
        },
        {
            title: "Custom Domain",
            href: "https://doc.eleventeen.net/domains",
            description: "Set up and verify your sending domain.",
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
