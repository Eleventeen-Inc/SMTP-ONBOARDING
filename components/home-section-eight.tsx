import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function HomeSectionEight() {
    const t = useTranslations("section_eight");

    return (
        <div className="flex flex-col">
            <div className="w-full h-px bg-border" />
            <div className="lg:px-10 px-4">
                <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-10 px-4 border-x border-border py-16 lg:py-24">
                    <div className="p-8 lg:p-14 text-center">
                        <h2 className="mt-3 text-4xl lg:text-6xl font-normal leading-tight lg:text-balance">
                            {t("headline")}
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-tight">
                            {t("description")}
                        </p>
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                            <Button className="rounded-full h-12 px-6">
                                {t("cta.get_started")}
                            </Button>
                            <Button variant="outline" className="rounded-full h-12 px-6 bg-background">
                                {t("cta.talk_to_sales")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
