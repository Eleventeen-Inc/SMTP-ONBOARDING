import { Card } from "./ui/card";
import { useTranslations } from "next-intl";

export default function HomeSectionSix() {
    const t = useTranslations("section_six");

    const checklistItems = [
        t("checklist.items.0"),
        t("checklist.items.1"),
        t("checklist.items.2"),
        t("checklist.items.3"),
        t("checklist.items.4"),
        t("checklist.items.5"),
    ];

    return (
        <div className="flex flex-col">
            <div className="relative w-full lg:max-w-7xl lg:mx-auto">
                <div className="absolute top-0 lg:left-0 left-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
                <div className="absolute top-0 lg:right-0 right-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
            </div>
            <div className="w-full h-px bg-border" />
            <div className="px-4 lg:px-0">
                <div className="relative w-full lg:max-w-7xl lg:mx-auto border-x border-border py-14 lg:py-20">
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[0.5px] bg-border" />
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col justify-between gap-8">
                            <div className="space-y-4 lg:px-10 px-4">
                                <p className="text-sm font-semibold text-muted-foreground">
                                    {t("eyebrow")}
                                </p>
                                <h2 className="text-4xl lg:text-5xl font-normal leading-tight lg:text-balance">
                                    {t("headline")}
                                </h2>
                                <p className="text-muted-foreground leading-tight max-w-xl">
                                    {t("description")}
                                </p>
                            </div>
                            <div className="grid grid-cols-3 border-y">
                                <Card className="rounded-none ring-0 border-r hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">99.99%</p>
                                    <p className="text-xs text-muted-foreground">{t("stats.delivery_uptime")}</p>
                                </Card>
                                <Card className="rounded-none ring-0 border-r hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">&lt;120ms</p>
                                    <p className="text-xs text-muted-foreground">{t("stats.api_response")}</p>
                                </Card>
                                <Card className="rounded-none ring-0 hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">24/7</p>
                                    <p className="text-xs text-muted-foreground">{t("stats.event_tracking")}</p>
                                </Card>
                            </div>
                        </div>
                        <div className="h-full flex flex-col lg:px-10 px-4 lg:pt-0 pt-8">
                            <div className="flex items-center justify-between pb-3">
                                <p className="text-sm font-semibold">{t("checklist.title")}</p>
                                <span className="text-xs text-muted-foreground">{t("checklist.complete")}</span>
                            </div>
                            <div className="space-y-3 py-4">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />
                                        <p className="text-sm text-muted-foreground leading-tight">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <p className="text-xs text-muted-foreground mb-2">{t("latest_api_request.label")}</p>
                                <pre className="text-xs leading-relaxed overflow-x-auto">
                                    {t("latest_api_request.payload")}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:max-w-7xl lg:mx-auto">
                <div className="absolute top-0 lg:left-0 left-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
                <div className="absolute top-0 lg:right-0 right-4 w-0.5 h-0.5 bg-foreground rounded-full z-10 outline-7 outline-sidebar" />
            </div>
        </div>
    );
}
