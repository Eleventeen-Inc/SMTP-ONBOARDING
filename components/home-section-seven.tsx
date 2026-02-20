import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useTranslations } from "next-intl";

export default function HomeSectionSeven() {
    const t = useTranslations("section_seven");

    const milestones = [
        {
            day: t("milestones.day_1.day"),
            title: t("milestones.day_1.title"),
            description: t("milestones.day_1.description"),
        },
        {
            day: t("milestones.day_3.day"),
            title: t("milestones.day_3.title"),
            description: t("milestones.day_3.description"),
        },
        {
            day: t("milestones.day_7.day"),
            title: t("milestones.day_7.title"),
            description: t("milestones.day_7.description"),
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="w-full h-px bg-border" />
            <div className="lg:px-10 px-4">
                <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-10 px-4 border-x border-border py-14 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-5">
                            <p className="text-sm font-semibold text-muted-foreground">
                                {t("eyebrow")}
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-normal leading-tight lg:text-balance">
                                {t("headline")}
                            </h2>
                            <p className="text-muted-foreground leading-tight max-w-xl">
                                {t("description")}
                            </p>
                            <div className="flex gap-3 pt-1">
                                <Button variant="outline" className="rounded-full h-12 px-6 bg-background">
                                    {t("cta.book_onboarding")}
                                </Button>
                            </div>
                        </div>
                        <Card className="bg-[url('/section-seven.webp')] bg-cover shadow-sm bg-center rounded-3xl p-4 lg:p-6 ring-0">
                            <div className="space-y-3">
                                {milestones.map((item) => (
                                    <Card key={item.day} className="rounded-2xl bg-white p-4">
                                        <p className="text-xs font-semibold text-muted-foreground">{item.day}</p>
                                        <p className="text-base font-semibold mt-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground mt-1 leading-tight">{item.description}</p>
                                    </Card>
                                ))}
                            </div>
                        </Card>
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
