"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function HomeSectionTwo() {
    const [tab, setTab] = useState("nodejs");
    const [action, setAction] = useState("send-email");

    const handleSelectTab = (tab: string) => {
        setTab(tab);
    };

    const handleSelectAction = (action: string) => {
        setAction(action);
    };

    const languages = [
        { id: "nodejs", label: "NodeJS" },
        { id: "python", label: "Python" },
        { id: "php", label: "PHP" },
        { id: "go", label: "Go" },
        { id: "rust", label: "Rust" },
        { id: "java", label: "Java" },
    ];

    const actions = [
        { id: "send-email", label: "Send Email", image: "/seed-1.png", alt: "Send Email" },
        { id: "create-domain", label: "Create Domain", image: "/seed-2.png", alt: "Create Domain" },
        { id: "create-api-key", label: "Create API Key", image: "/seed-3.png", alt: "Create API Key" },
    ];

    const codeMap: Record<string, Record<string, string>> = {
        nodejs: {
            "send-email": `import EleventeenClient from "@eleventeen/eleventeen-js";

const client = new EleventeenClient({
  apiKey: process.env.ELEVENTEEN_API_KEY,
});

await client.emails.send({
  from: "Eleventeen <hello@updates.eleventeen.dev>",
  to: ["customer@example.com"],
  subject: "Welcome to Eleventeen",
  html: "<strong>Your onboarding is ready.</strong>",
});`,
            "create-domain": `import EleventeenClient from "@eleventeen/eleventeen-js";

const client = new EleventeenClient({
  apiKey: process.env.ELEVENTEEN_API_KEY,
});

await client.domains.create({
  name: "updates.eleventeen.dev",
  region: "us-east-1",
});`,
            "create-api-key": `import EleventeenClient from "@eleventeen/eleventeen-js";

const client = new EleventeenClient({
  apiKey: process.env.ELEVENTEEN_API_KEY,
});

await client.apiKeys.create({
  name: "onboarding-service-key",
  permissions: ["emails:send", "domains:read"],
});`,
        },
        python: {
            "send-email": `from eleventeen import EleventeenClient
import os

client = EleventeenClient(api_key=os.environ["ELEVENTEEN_API_KEY"])

client.emails.send({
    "from": "Eleventeen <hello@updates.eleventeen.dev>",
    "to": ["customer@example.com"],
    "subject": "Welcome to Eleventeen",
    "html": "<strong>Your onboarding is ready.</strong>",
})`,
            "create-domain": `from eleventeen import EleventeenClient
import os

client = EleventeenClient(api_key=os.environ["ELEVENTEEN_API_KEY"])

client.domains.create({
    "name": "updates.eleventeen.dev",
    "region": "us-east-1",
})`,
            "create-api-key": `from eleventeen import EleventeenClient
import os

client = EleventeenClient(api_key=os.environ["ELEVENTEEN_API_KEY"])

client.api_keys.create({
    "name": "onboarding-service-key",
    "permissions": ["emails:send", "domains:read"],
})`,
        },
        php: {
            "send-email": `<?php

use Eleventeen\\EleventeenClient;

$client = new EleventeenClient([
    "apiKey" => getenv("ELEVENTEEN_API_KEY"),
]);

$client->emails->send([
    "from" => "Eleventeen <hello@updates.eleventeen.dev>",
    "to" => ["customer@example.com"],
    "subject" => "Welcome to Eleventeen",
    "html" => "<strong>Your onboarding is ready.</strong>",
]);`,
            "create-domain": `<?php

use Eleventeen\\EleventeenClient;

$client = new EleventeenClient([
    "apiKey" => getenv("ELEVENTEEN_API_KEY"),
]);

$client->domains->create([
    "name" => "updates.eleventeen.dev",
    "region" => "us-east-1",
]);`,
            "create-api-key": `<?php

use Eleventeen\\EleventeenClient;

$client = new EleventeenClient([
    "apiKey" => getenv("ELEVENTEEN_API_KEY"),
]);

$client->apiKeys->create([
    "name" => "onboarding-service-key",
    "permissions" => ["emails:send", "domains:read"],
]);`,
        },
        go: {
            "send-email": `package main

import (
  "os"

  "github.com/eleventeen/eleventeen-go"
)

func main() {
  client := eleventeen.NewClient(os.Getenv("ELEVENTEEN_API_KEY"))

  client.Emails.Send(eleventeen.SendEmailRequest{
    From:    "Eleventeen <hello@updates.eleventeen.dev>",
    To:      []string{"customer@example.com"},
    Subject: "Welcome to Eleventeen",
    HTML:    "<strong>Your onboarding is ready.</strong>",
  })
}`,
            "create-domain": `package main

import (
  "os"

  "github.com/eleventeen/eleventeen-go"
)

func main() {
  client := eleventeen.NewClient(os.Getenv("ELEVENTEEN_API_KEY"))

  client.Domains.Create(eleventeen.CreateDomainRequest{
    Name:   "updates.eleventeen.dev",
    Region: "us-east-1",
  })
}`,
            "create-api-key": `package main

import (
  "os"

  "github.com/eleventeen/eleventeen-go"
)

func main() {
  client := eleventeen.NewClient(os.Getenv("ELEVENTEEN_API_KEY"))

  client.APIKeys.Create(eleventeen.CreateAPIKeyRequest{
    Name:        "onboarding-service-key",
    Permissions: []string{"emails:send", "domains:read"},
  })
}`,
        },
        rust: {
            "send-email": `use eleventeen::EleventeenClient;

#[tokio::main]
async fn main() {
    let client = EleventeenClient::new(std::env::var("ELEVENTEEN_API_KEY").unwrap());

    client.emails().send(
        "Eleventeen <hello@updates.eleventeen.dev>",
        vec!["customer@example.com"],
        "Welcome to Eleventeen",
        "<strong>Your onboarding is ready.</strong>",
    ).await.unwrap();
}`,
            "create-domain": `use eleventeen::EleventeenClient;

#[tokio::main]
async fn main() {
    let client = EleventeenClient::new(std::env::var("ELEVENTEEN_API_KEY").unwrap());

    client.domains().create("updates.eleventeen.dev", "us-east-1")
        .await
        .unwrap();
}`,
            "create-api-key": `use eleventeen::EleventeenClient;

#[tokio::main]
async fn main() {
    let client = EleventeenClient::new(std::env::var("ELEVENTEEN_API_KEY").unwrap());

    client.api_keys().create("onboarding-service-key", vec!["emails:send", "domains:read"])
        .await
        .unwrap();
}`,
        },
        java: {
            "send-email": `import dev.eleventeen.EleventeenClient;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        EleventeenClient client = new EleventeenClient(System.getenv("ELEVENTEEN_API_KEY"));

        client.emails().send(
            "Eleventeen <hello@updates.eleventeen.dev>",
            List.of("customer@example.com"),
            "Welcome to Eleventeen",
            "<strong>Your onboarding is ready.</strong>"
        );
    }
}`,
            "create-domain": `import dev.eleventeen.EleventeenClient;

public class Main {
    public static void main(String[] args) {
        EleventeenClient client = new EleventeenClient(System.getenv("ELEVENTEEN_API_KEY"));

        client.domains().create("updates.eleventeen.dev", "us-east-1");
    }
}`,
            "create-api-key": `import dev.eleventeen.EleventeenClient;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        EleventeenClient client = new EleventeenClient(System.getenv("ELEVENTEEN_API_KEY"));

        client.apiKeys().create("onboarding-service-key", List.of("emails:send", "domains:read"));
    }
}`,
        },
    };

    const selectedCode = codeMap[tab]?.[action] ?? codeMap.nodejs["send-email"];

    return (
        <Card className="bg-[#F5F3F1] rounded-3xl space-y-6 lg:space-y-8">
            <CardHeader className="flex items-center justify-start gap-2 overflow-x-auto pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {languages.map((language) => (
                    <Button
                        key={language.id}
                        onClick={() => handleSelectTab(language.id)}
                        variant={tab === language.id ? "outline" : "ghost"}
                        className={`h-10 px-4 rounded-full whitespace-nowrap ${tab === language.id
                            ? "bg-background border-border hover:bg-background"
                            : "bg-transparent hover:bg-[#e1dfde]"
                            }`}
                    >
                        {language.label}
                    </Button>
                ))}
            </CardHeader>
            <CardContent>
                <Card className="bg-background p-0 rounded-3xl max-w-5xl mx-auto ring-[#e9e9e9] flex flex-col lg:flex-row">
                    <div className="flex flex-col items-start justify-start space-y-4 border-b lg:border-b-0 lg:border-r border-[#e9e9e9] p-3 w-full lg:w-5/12">
                        <div className="flex flex-col items-start justify-start space-y-2 w-full">
                            {actions.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => handleSelectAction(item.id)}
                                    variant="ghost"
                                    className={`w-full min-h-12 text-start rounded-2xl justify-between px-3 ${action === item.id
                                        ? "bg-[#F5F3F1] hover:bg-[#ece9e7]"
                                        : "bg-background hover:bg-[#f7f7f7]"
                                        }`}
                                >
                                    <div className="flex flex-row items-center gap-x-2">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            width={200}
                                            height={200}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <p>{item.label}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-2 shrink-0">
                                        <p className="text-muted-foreground">SDK Code</p>
                                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="text-muted-foreground" />
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-4 py-3 px-3 lg:px-4 w-full lg:w-7/12">
                        <div className="flex flex-row items-center gap-x-1 px-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <div className="relative w-full overflow-x-hidden lg:h-120">
                            <pre className="p-4 text-sm leading-relaxed w-full">
                                <code className="font-mono text-foreground whitespace-pre">
                                    {selectedCode}
                                </code>
                            </pre>
                        </div>
                    </div>
                </Card>
            </CardContent>
            <CardFooter className="flex lg:flex-row flex-col items-center lg:justify-between justify-center space-y-3 lg:space-y-0 border-t-0 pt-0">
                <span className="flex-col justify-start items-start space-y-2 lg:flex hidden">
                    <h3 className="text-2xl font-semibold">
                        Developer-first SDK flows for Eleventeen
                    </h3>
                    <p className="leading-tight text-muted-foreground">
                        Pick a language and action to generate ready-to-use Eleventeen snippets for <br /> sending emails, creating domains, and provisioning API keys.
                    </p>
                </span>
                <span className="leading-tight text-muted-foreground text-center lg:hidden block">
                    Pick a language and action to instantly generate Eleventeen snippets for sending emails, managing domains, and creating API keys.
                </span>
                <Button variant={'outline'} size={'lg'} className="rounded-full h-10 px-3">
                    Signup Now
                </Button>
            </CardFooter>
        </Card>
    );
}
