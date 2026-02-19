import { Button } from "./ui/button";

export default function HomeSectionOne() {
    return (
        <div className="flex lg:flex-row flex-col items-start justify-between">
            <div className="flex flex-col justify-start items-start text-start space-y-6">
                <h1 className="text-5xl font-normal lg:tracking-tight lg:text-balance lg:mb-6 mb-0">
                    Build, send, and manage <br /> emails with confidence.
                </h1>
                <p className="leading-7 not-first:mt-6 max-w-lg text-muted-foreground lg:hidden block">
                    Powerful APIs, modern SDKs, and real-time insights designed to integrate seamlessly into your workflow and scale effortlessly as your product grows — giving you the reliability, performance, and control needed to build, automate, and deliver emails with confidence at any stage of your application’s journey.
                </p>
                <div className="flex flex-row items-center gap-x-3">
                    <Button className="rounded-full h-14 text-lg px-5">
                        Signup
                    </Button>
                    <Button className="rounded-full h-14 text-lg px-5 bg-background shadow-sm" variant={'outline'}>
                        Contact Sales
                    </Button>
                </div>
            </div>
            <p className="leading-tight not-first:mt-6 max-w-lg text-muted-foreground lg:block hidden">
                Powerful APIs, modern SDKs, and real-time insights designed to integrate seamlessly into your workflow and scale effortlessly as your product grows — giving you the reliability, performance, and control needed to build, automate, and deliver emails with confidence at any stage of your application’s journey.
            </p>
        </div>
    )
}