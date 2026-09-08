
import React from 'react'
import {NoiseBackground} from "@/components/ui/noise-background";
import {Card, CardHeader, CardContent, CardDescription} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {IconBolt, IconCircleCheck, IconClock, IconTicket} from "@tabler/icons-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SemiFooter from "@/components/SemiFooter";

const faqs = [
    {
        question: "What is the best internet speed?",
        answer: "The best internet speed depends on your location and the speed of your internet connection. However, there are certain factors that can affect your internet speed.",
    },
    {
        question: "How do I check my internet speed?",
        answer: "You can check your internet speed by going to your internet service provider's website and looking for the speed of your connection.",
    },
    {
        question: "What is the best internet connection?",
        answer: "The best internet connection depends on your location, the speed of your internet connection, and the type of internet service provider you use.",
    },
    {
        question: "How do I connect to the internet?",
        answer: "You can connect to the internet by going to your internet service provider's website and following the instructions to connect to the internet.",
    },
    {
        question: "What is the best internet provider?",
        answer: "The best internet provider depends on your location, the speed of your internet connection, and the type of internet service you need.",
    }
]

const vouchers = [
    { id: "1hr",  name: "1 Hour",  price: 20,  speed: "5 Mbps",  duration: "1 Hour" },
    { id: "3hr",  name: "3 Hours", price: 40,  speed: "5 Mbps",  duration: "3 Hours" },
    { id: "6hr",  name: "6 Hours", price: 60,  speed: "10 Mbps", duration: "6 Hours" },
    { id: "12hr", name: "12 Hours",price: 90,  speed: "10 Mbps", duration: "12 Hours" },
    { id: "24hr", name: "24 Hours",price: 100, speed: "10 Mbps", duration: "24 Hours" },
]

const voucherFeatures = [
    "Instant activation",
    "No subscription required",
    "Multiple device support",
    "24/7 support",
]

const commonFeatures = [
    "Unlimited data",
    "24/7 support",
    "Unlimited bandwidth",
    "Multiple device support",
]

const internetPackages = [
    {
        id: "customized",
        name: "Customized",
        speed: "Custom",
        price: "Contact Us",
        duration: "30 Days",
        features: [
            ...commonFeatures,
            "Flexible speed selection",
            "Custom user limits",
            "Tailored business solutions",
        ],
    },
    {
        id: "basic",
        name: "Basic",
        speed: "5 Mbps",
        price: "Ksh 1,500",
        duration: "30 Days",
        features: [
            ...commonFeatures,
            "Suitable for browsing and streaming",
        ],
    },
    {
        id: "silver",
        name: "Silver",
        speed: "10 Mbps",
        price: "Ksh 2,500",
        duration: "30 Days",
        features: [
            ...commonFeatures,
            "HD streaming",
            "Online gaming support",
            "Priority customer support",
        ],
    },
    {
        id: "gold",
        name: "Gold",
        speed: "20 Mbps",
        price: "Ksh 4,500",
        duration: "30 Days",
        features: [
            ...commonFeatures,
            "4K streaming",
            "Low-latency gaming",
            "Highest priority support",
            "Suitable for offices and heavy users",
        ],
    },
]

const PlanCard = ({ pkg }: { pkg: typeof internetPackages[0] }) => (
    <Card className="p-1 bg-[#262626] rounded-3xl">
        <CardHeader className="p-6 bg-[#171717] rounded-3xl space-y-2">
            <h2 className="text-xl font-bold">{pkg.name}</h2>
            <p className="text-[15px] text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </CardHeader>

        <div className="p-6 space-y-2">
            <h2 className="text-3xl font-medium">
                {pkg.price} <span className="text-sm font-medium">/month</span>
            </h2>
            <NoiseBackground className="w-full cursor-pointer" gradientColors={["#5ff5fd", "#2977e3", "#7e1222"]}>
                <button className="w-full bg-black rounded-full p-3 cursor-pointer">
                    Get Started
                </button>
            </NoiseBackground>
        </div>

        <div className="border w-full max-w-11/12 mx-auto" />

        <CardContent className="pb-5 text-sm space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-2"><IconBolt size={17} /><span>Speed</span></span>
                <span>{pkg.speed}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-2"><IconClock size={17} /><span>Duration</span></span>
                <span>{pkg.duration}</span>
            </div>
            {pkg.features.map((feature, idx) => (
                <CardDescription key={idx} className="flex items-center gap-2">
                    <IconCircleCheck size={16} /> <span>{feature}</span>
                </CardDescription>
            ))}
        </CardContent>
    </Card>
)

const VoucherCard = ({ voucher }: { voucher: typeof vouchers[0] }) => (
    <Card className="p-1 bg-[#262626] rounded-3xl">
        <CardHeader className="p-6 bg-[#171717] rounded-3xl space-y-2">
            <h2 className="text-xl font-bold">{voucher.name}</h2>
            <p className="text-[15px] text-muted-foreground">
                Pay once, connect instantly. No commitment required.
            </p>
        </CardHeader>

        <div className="p-6 space-y-2">
            <h2 className="text-3xl font-medium">
                Ksh {voucher.price} <span className="text-sm font-medium">/ voucher</span>
            </h2>
            <NoiseBackground className="w-full cursor-pointer" gradientColors={["#5ff5fd", "#2977e3", "#7e1222"]}>
                <button className="w-full bg-black rounded-full p-3 cursor-pointer">
                    Buy Voucher
                </button>
            </NoiseBackground>
        </div>

        <div className="border w-full max-w-11/12 mx-auto" />

        <CardContent className="pb-5 text-sm space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-2"><IconBolt size={17} /><span>Speed</span></span>
                <span>{voucher.speed}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-2"><IconClock size={17} /><span>Valid for</span></span>
                <span>{voucher.duration}</span>
            </div>
            {voucherFeatures.map((feature, idx) => (
                <CardDescription key={idx} className="flex items-center gap-2">
                    <IconCircleCheck size={16} /> <span>{feature}</span>
                </CardDescription>
            ))}
        </CardContent>
    </Card>
)

const Page = () => {
    return (
        <div className="py-10 space-y-8">
            <div className="flex items-center justify-center w-full flex-col pt-20 px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    High speed internet
                </h2>
            </div>

            <div className="container mx-auto px-4 pb-10">
                <Tabs defaultValue="packages" className="w-full space-y-8">
                    {/* Toggle */}
                    <div className="flex justify-center">
                        <TabsList className="bg-[#262626] rounded-full p-1 h-auto">
                            <TabsTrigger
                                value="packages"
                                className="rounded-full px-6 py-2 data-[state=active]:bg-[#171717] data-[state=active]:text-white"
                            >
                                Monthly Plans
                            </TabsTrigger>
                            <TabsTrigger
                                value="vouchers"
                                className="rounded-full px-6 py-2 data-[state=active]:bg-[#171717] data-[state=active]:text-white flex items-center gap-2"
                            >
                                <IconTicket size={16} />
                                Vouchers
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Monthly Plans */}
                    <TabsContent value="packages">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {internetPackages.map((pkg) => (
                                <PlanCard key={pkg.id} pkg={pkg} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Vouchers */}
                    <TabsContent value="vouchers">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {vouchers.map((voucher) => (
                                <VoucherCard key={voucher.id} voucher={voucher} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

            </div>



            <div className="space-y-5  border-y border-neutral-800 space-y-7 px-4">
                <div className="container mx-auto grid md:grid-cols-9">
                    <div className="lg:col-span-3 border-r border-neutral-800 pr-10 py-10">
                        <h1 className={'bg-clip-text text-transparent  bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white  md:text-2xl font-sans font-bold tracking-tight'}>Frequently asked questions</h1>
                    </div>

                    <div className="lg:col-span-6 py-10 md:pl-10">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, idx) => (
                                <AccordionItem value={`item-${idx}`} key={idx}>
                                    <AccordionTrigger className={'text-xl'}>{faq.question}</AccordionTrigger>
                                    <AccordionContent className={'text-base'}>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>


                </div>


            </div>

            <SemiFooter/>
        </div>
    )
}

export default Page