import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function HomeSectionSix() {
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
                                    Launch with confidence
                                </p>
                                <h2 className="text-4xl lg:text-5xl font-normal leading-tight lg:text-balance">
                                    Ready to ship reliable email infrastructure for your product?
                                </h2>
                                <p className="text-muted-foreground leading-tight max-w-xl">
                                    Set up domains, generate API keys, monitor delivery events, and scale from first send to millions of messages with a workflow that feels native to developers.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 border-y">
                                <Card className="rounded-none ring-0 border-r hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">99.99%</p>
                                    <p className="text-xs text-muted-foreground">Delivery uptime</p>
                                </Card>
                                <Card className="rounded-none ring-0 border-r hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">&lt;120ms</p>
                                    <p className="text-xs text-muted-foreground">API response</p>
                                </Card>
                                <Card className="rounded-none ring-0 hover:bg-accent duration-150 bg-transparent p-4">
                                    <p className="text-2xl font-semibold">24/7</p>
                                    <p className="text-xs text-muted-foreground">Event tracking</p>
                                </Card>
                            </div>
                        </div>
                        <div className="h-full flex flex-col lg:px-10 px-4 lg:pt-0 pt-8">
                            <div className="flex items-center justify-between pb-3">
                                <p className="text-sm font-semibold">Production Readiness Checklist</p>
                                <span className="text-xs text-muted-foreground">6/6 complete</span>
                            </div>
                            <div className="space-y-3 py-4">
                                {[
                                    "Domain and DNS records verified",
                                    "SPF, DKIM, and DMARC configured",
                                    "API key scoped per environment",
                                    "Webhook endpoint receiving events",
                                    "Rate limits and retries validated",
                                    "Monitoring alerts enabled",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />
                                        <p className="text-sm text-muted-foreground leading-tight">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <p className="text-xs text-muted-foreground mb-2">Latest API request</p>
                                <pre className="text-xs leading-relaxed overflow-x-auto">
                                    {`POST /v1/emails/send
from: alerts@acme.dev
to: user@product.com
status: 202 accepted`}
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
