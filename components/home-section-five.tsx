"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function HomeSectionFive() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full lg:max-w-7xl lg:mx-auto">
                <div className="absolute top-0 lg:left-0 left-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
                <div className="absolute top-0 lg:right-0 right-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
            </div>
            <div className="lg:px-10 px-4">
                <div className="w-full lg:max-w-7xl place-content-center gap-x-6 lg:mx-auto lg:px-10 px-4 border-x border-border grid grid-cols-1 lg:grid-cols-2 space-y-8 pt-28 lg:pt-32 p-8">
                    <span className="flex flex-col space-y-5 leading-tight justify-start items-start">
                        <p className="text-muted-foreground font-semibold">
                            Built for engineering teams
                        </p>
                        <h1 className="text-4xl font-normal lg:tracking-tight lg:text-balance">
                            A comprehensive dashboard <br /> for modern email delivery
                        </h1>
                        <Button className="rounded-full h-14 text-lg px-5">
                            Explore the platform
                        </Button>
                    </span>
                    <span>
                        Build, test, and monitor transactional email from one place. Our app is designed for developers with clear logs, delivery insights, environment-based configuration, and an API-first workflow that ships faster.
                    </span>
                    <div className="relative overflow-hidden h-full bg-[url('/abstract-gradient-background-with-grainy-effect_84443-3104.jpg')] bg-cover bg-center rounded-3xl">
                        <Image
                            src={'/section-five.png'}
                            alt="Section Five"
                            width={1000}
                            height={1000}
                            className="w-full h-120 rounded-2xl object-cover object-bottom-left translate-x-8 -translate-y-8 lg:translate-x-14 lg:-translate-y-12"
                        />
                        <span className="flex flex-col relative z-10 space-y-2 leading-tight justify-start items-start p-4">
                            <p className="font-semibold text-muted">
                                Real-time campaign and delivery visibility
                            </p>
                            <span className="text-background leading-tight">
                                Track sends, bounces, opens, and failures in a single dashboard so your team can debug faster and keep communication reliable.
                            </span>
                        </span>
                    </div>
                    <Card className="relative mt-8 lg:mt-0 bg-[#F5F3F1] rounded-3xl p-6 ring-border">
                        <Card className="h-80 rounded-2xl ring-border/50 shadow-sm my-auto py-0">
                            <div className="h-full rounded-2xl bg-white p-4 flex flex-col">
                                <div className="mb-3 text-sm font-semibold text-slate-700">New Message</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">From</span>
                                        <span className="text-slate-800">alerts@acme.dev</span>
                                    </div>
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">To</span>
                                        <span className="text-slate-800">mohd@company.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">Subject</span>
                                        <span className="text-slate-800">Your onboarding is complete</span>
                                    </div>
                                </div>
                                <div className="mt-3 grow text-sm text-slate-600">
                                    Hi Mohammed,
                                    <br />
                                    Welcome aboard. Your SMTP domain is verified and your first test email was delivered successfully.
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Connected via SMTP + API fallback</span>
                                    <Button className="h-8 rounded-full px-4 text-xs">Send</Button>
                                </div>
                            </div>
                        </Card>
                        <span className="flex flex-col relative z-10 space-y-2 leading-tight justify-start items-start p-4">
                            <p className="font-semibold">
                                Familiar compose UI for faster testing
                            </p>
                            <span className="leading-tight">
                                Preview and send emails in a common compose experience with from, to, and subject fields. Developers can validate formatting, content, and sending behavior before going live.
                            </span>
                        </span>
                    </Card>
                </div>
            </div>
        </div>
    )
}
