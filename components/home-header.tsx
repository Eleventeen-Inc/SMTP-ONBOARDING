"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import ListItem from "./list-item";
import HomeHeaderMenuBar from "./home-header-menu-bar";

export default function HomeHeader() {
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
    ];

    return (
        <div className="relative z-60 flex flex-row items-center justify-between lg:mb-24 mb-12">
            <div className="flex flex-row items-center gap-x-8">
                <Link href="/">
                    <svg width="136" height="18" viewBox="0 0 136 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M40.5963 4.38833C44.5764 4.38837 46.6851 6.96356 46.6851 12.0876H37.7494C37.8549 14.0321 38.962 15.2935 40.649 15.2935C41.756 15.2935 42.7313 14.7416 42.9685 13.8482H46.5007C45.7099 16.5023 43.5747 18 40.807 18C36.4841 18 34.3226 15.6351 34.3226 10.9577C34.3226 6.96353 36.616 4.38833 40.5963 4.38833ZM40.4907 7.09483C39.12 7.09486 37.9866 8.14602 37.8548 9.93284H43.1531C43.1004 8.01461 41.835 7.09483 40.4907 7.09483Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M65.2564 4.38833C69.2366 4.38837 71.3453 6.96356 71.3453 12.0876H62.4096C62.515 14.0321 63.6221 15.2935 65.3091 15.2935C66.4162 15.2935 67.3914 14.7416 67.6287 13.8482H71.1609C70.3701 16.5023 68.2349 18 65.4672 18C61.1443 18 58.9828 15.6351 58.9828 10.9577C58.9828 6.96353 61.2762 4.38833 65.2564 4.38833ZM65.1509 7.09483C63.7802 7.09486 62.6468 8.14602 62.515 9.93284H67.8133C67.7605 8.01461 66.4952 7.09483 65.1509 7.09483Z" fill="currentColor" />
                        <path d="M89.1603 4.72995H96.33V7.14755H89.1603V12.4555C89.1603 14.0847 89.7403 15.0307 91.1373 15.0307C92.508 15.0307 93.1405 14.1109 93.1405 12.508V9.14455H96.33V12.8234C96.33 15.5562 94.7485 18 91.0846 18C87.2889 18 85.7863 15.5825 85.7863 12.7971V1.23496H89.1603V4.72995Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M103.714 4.38833C107.694 4.38837 109.803 6.96356 109.803 12.0876H100.867C100.973 14.0321 102.08 15.2935 103.767 15.2935C104.874 15.2935 105.849 14.7416 106.086 13.8482H109.618C108.828 16.5023 106.692 18 103.925 18C99.6018 18 97.4403 15.6351 97.4403 10.9577C97.4403 6.96353 99.7337 4.38833 103.714 4.38833ZM103.608 7.09483C102.238 7.09486 101.104 8.14602 100.973 9.93284H106.271C106.218 8.01461 104.953 7.09483 103.608 7.09483Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M116.971 4.38833C120.951 4.38837 123.06 6.96356 123.06 12.0876H114.124C114.229 14.0321 115.336 15.2935 117.023 15.2935C118.13 15.2935 119.106 14.7416 119.343 13.8482H122.875C122.084 16.5023 119.949 18 117.181 18C112.859 18 110.697 15.6351 110.697 10.9577C110.697 6.96353 112.991 4.38833 116.971 4.38833ZM116.865 7.09483C115.495 7.09486 114.361 8.14602 114.229 9.93284H119.528C119.475 8.01461 118.209 7.09483 116.865 7.09483Z" fill="currentColor" />
                        <path d="M3.42661 17.6584H0V0H3.42661V17.6584Z" fill="currentColor" />
                        <path d="M9.81046 17.6584H6.38385V0H9.81046V17.6584Z" fill="currentColor" />
                        <path d="M28.5027 3.25842H19.198V6.98978H27.7646V10.0644H19.198V14.5577H28.9244V17.6584H15.6395V0.210305H28.5027V3.25842Z" fill="currentColor" />
                        <path d="M33.1743 17.6584H29.7475V0H33.1743V17.6584Z" fill="currentColor" />
                        <path d="M52.8992 13.27L55.6407 4.72995H59.2519L54.5863 17.6584H51.0014L46.3623 4.72995H50.1843L52.8992 13.27Z" fill="currentColor" />
                        <path d="M79.9893 4.38833C82.467 4.38836 84.2857 5.88622 84.2857 8.69787V17.6584H80.8327V9.82779C80.8327 7.83071 80.2528 7.27888 78.6186 7.27887C76.8262 7.27887 75.9564 8.2774 75.9564 10.2482V17.6584H72.5296V4.72995H75.7981V6.62189C76.5889 5.17664 77.907 4.38833 79.9893 4.38833Z" fill="currentColor" />
                        <path d="M131.704 4.38833C134.181 4.38836 136 5.88621 136 8.69787V17.6584H132.547V9.82779C132.547 7.83071 131.967 7.27887 130.333 7.27887C128.54 7.27887 127.671 8.2774 127.671 10.2482V17.6584H124.244V4.72995H127.512V6.62189C128.303 5.17664 129.621 4.38833 131.704 4.38833Z" fill="currentColor" />
                    </svg>
                </Link>
                <NavigationMenu className="lg:block hidden">
                    <NavigationMenuList className="gap-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="rounded-full bg-sidebar hover:bg-[#e7e5e2] focus:bg-[#e7e5e2] data-[state=open]:bg-[#e7e5e2] data-[state=open]:hover:bg-[#e7e5e2]">
                                Getting started
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="p-6">
                                <ul className="w-96">
                                    <ListItem href="https://doc.eleventeen.net/quickstart" title="Quickstart">
                                        Send your first email in under 5 minutes.
                                    </ListItem>
                                    <ListItem href="https://doc.eleventeen.net/api-keys" title="API Keys">
                                        Create and manage secure API keys.
                                    </ListItem>
                                    <ListItem href="https://doc.eleventeen.net/domains" title="Domains">
                                        Set up and verify your sending domain.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:flex">
                            <NavigationMenuTrigger className="rounded-full bg-sidebar hover:bg-[#e7e5e2] focus:bg-[#e7e5e2] data-[state=open]:bg-[#e7e5e2] data-[state=open]:hover:bg-[#e7e5e2]">Product</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-6">
                                <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="rounded-full font-semibold bg-sidebar hover:bg-[#e7e5e2] focus:bg-[#e7e5e2] data-[state=open]:bg-[#e7e5e2] data-[state=open]:hover:bg-[#e7e5e2]">
                                <Link href="https://doc.eleventeen.net">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-row items-center gap-x-3">
                <Button variant={'outline'} className="h-10 rounded-full px-3">
                    Login
                </Button>
                <Button className="h-10 rounded-full px-3 lg:flex hidden">
                    Get Started
                    <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
                </Button>
                <HomeHeaderMenuBar />
            </div>
        </div>
    )
}
