import { DiscordIcon, Facebook02Icon, Github01Icon, Linkedin02Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function HomeFooter() {
    return (
        <footer className="w-full border-t border-border">
            <div className="relative w-full lg:max-w-7xl lg:mx-auto">
                <div className="absolute top-0 lg:left-0 left-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
                <div className="absolute top-0 lg:right-0 right-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
            </div>
            <div className="w-full max-w-7xl mx-auto lg:px-10 px-4 py-12 lg:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="space-y-3">
                        <p className="text-xl font-semibold">Eleventeen</p>
                        <p className="text-sm text-muted-foreground leading-tight max-w-sm">
                            Developer-first email platform for sending, monitoring, and scaling transactional communication.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">Product</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">API</Link>
                            <Link href="#">SMTP Relay</Link>
                            <Link href="#">Dashboard</Link>
                            <Link href="#">Webhooks</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">Resources</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">Documentation</Link>
                            <Link href="#">Status</Link>
                            <Link href="#">Guides</Link>
                            <Link href="#">Changelog</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">Company</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#">About</Link>
                            <Link href="#">Security</Link>
                            <Link href="#">Privacy</Link>
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">Social</p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>Discord</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>X</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>LinkedIn</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>GitHub</p>
                            </Link>
                            <Link href="#" className="flex flex-row items-center gap-x-2">
                                <p>Facebook</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-6 text-xs text-muted-foreground flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
                    <p>© {new Date().getFullYear()} Eleventeen. All rights reserved.</p>
                    <p>Built for developers, designed for reliable delivery.</p>
                </div>
            </div>
        </footer>
    );
}
