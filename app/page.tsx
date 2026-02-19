import HomeFooter from "@/components/home-footer";
import HomeHeader from "@/components/home-header";
import HomeSectionEight from "@/components/home-section-eight";
import HomeSectionFive from "@/components/home-section-five";
import HomeSectionFour from "@/components/home-section-four";
import HomeSectionOne from "@/components/home-section-one";
import HomeSectionSeven from "@/components/home-section-seven";
import HomeSectionSix from "@/components/home-section-six";
import HomeSectionTwo from "@/components/home-section-two";

export default async function Page() {
    return (
        <div className="flex flex-col">
            <div className="w-full max-w-7xl mx-auto space-y-12 lg:py-6 lg:px-10 py-6 px-4">
                <HomeHeader />
                <HomeSectionOne />
                <HomeSectionTwo />
            </div>
            <HomeSectionFour />
            <HomeSectionFive />
            <HomeSectionSix />
            <HomeSectionSeven />
            <HomeSectionEight />
            <HomeFooter />
        </div>
    );
}
