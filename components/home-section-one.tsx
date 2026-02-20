import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function HomeSectionOne() {
    const t = useTranslations("section_one");

    return (
        <div className="flex lg:flex-row flex-col items-start justify-between">
            <div className="flex flex-col justify-start items-start text-start space-y-6">
                <h1 className="text-5xl whitespace-pre-line font-normal lg:tracking-tight lg:text-balance lg:mb-6 mb-0">
                    {t("headline")}
                </h1>
                <p className="leading-7 not-first:mt-6 max-w-lg text-muted-foreground lg:hidden block">
                    {t("description")}
                </p>
                <div className="flex flex-row items-center gap-x-3">
                    <Button className="rounded-full h-14 text-lg px-5">
                        {t("cta.signup")}
                    </Button>
                    <Button className="rounded-full h-14 text-lg px-5 bg-background shadow-sm" variant={"outline"}>
                        {t("cta.contact_sales")}
                    </Button>
                </div>
            </div>
            <p className="leading-tight not-first:mt-6 max-w-lg text-muted-foreground lg:block hidden">
                {t("description")}
            </p>
        </div>
    );
}
