"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useTranslations } from "next-intl";

export default function HomeSectionFive() {
    const t = useTranslations("section_five");

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
                            {t("eyebrow")}
                        </p>
                        <h1 className="text-4xl whitespace-pre-line font-normal lg:tracking-tight lg:text-balance">
                            {t("headline")}
                        </h1>
                        <Button className="rounded-full h-14 text-lg px-5">
                            {t("cta.explore_platform")}
                        </Button>
                    </span>
                    <span>
                        {t("description")}
                    </span>
                    <div className="relative overflow-hidden h-full bg-[url('/abstract-gradient-background-with-grainy-effect_84443-3104.jpg')] bg-cover bg-center rounded-3xl">
                        <Image
                            src={"/section-five.png"}
                            alt="Section Five"
                            width={1000}
                            height={1000}
                            className="w-full h-120 rounded-2xl object-cover object-bottom-left translate-x-8 -translate-y-8 lg:translate-x-14 lg:-translate-y-12"
                        />
                        <span className="flex flex-col relative z-10 space-y-2 leading-tight justify-start items-start p-4">
                            <p className="font-semibold text-muted">
                                {t("cards.visibility_title")}
                            </p>
                            <span className="text-background leading-tight">
                                {t("cards.visibility_description")}
                            </span>
                        </span>
                    </div>
                    <Card className="relative mt-8 lg:mt-0 bg-[#F5F3F1] rounded-3xl p-6 ring-border">
                        <Card className="h-80 rounded-2xl ring-border/50 shadow-sm my-auto py-0">
                            <div className="h-full rounded-2xl bg-white p-4 flex flex-col">
                                <div className="mb-3 text-sm font-semibold text-slate-700">{t("mock_email.title")}</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">{t("mock_email.from")}</span>
                                        <span className="text-slate-800">alerts@acme.dev</span>
                                    </div>
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">{t("mock_email.to")}</span>
                                        <span className="text-slate-800">mohd@company.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                                        <span className="w-14 text-slate-500">{t("mock_email.subject")}</span>
                                        <span className="text-slate-800">{t("mock_email.subject_value")}</span>
                                    </div>
                                </div>
                                <div className="mt-3 grow text-sm text-slate-600 whitespace-pre-line">
                                    {t("mock_email.body")}
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">{t("mock_email.footer")}</span>
                                    <Button className="h-8 rounded-full px-4 text-xs">{t("mock_email.send")}</Button>
                                </div>
                            </div>
                        </Card>
                        <span className="flex flex-col relative z-10 space-y-2 leading-tight justify-start items-start p-4">
                            <p className="font-semibold">
                                {t("cards.compose_title")}
                            </p>
                            <span className="leading-tight">
                                {t("cards.compose_description")}
                            </span>
                        </span>
                    </Card>
                </div>
            </div>
        </div>
    );
}
