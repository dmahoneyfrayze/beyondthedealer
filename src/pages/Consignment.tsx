import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Shield, Users, Camera, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const Consignment = () => {
    const benefits = [
        {
            icon: DollarSign,
            title: "Maximize Your Return",
            description: "Get more for your vehicle than a standard trade-in offer. We help you get market value."
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            description: "Avoid the risks of meeting strangers. We handle all test drives and negotiations securely."
        },
        {
            icon: Camera,
            title: "Professional Marketing",
            description: "Your vehicle gets professional photography, detailing, and premium listing placement."
        },
        {
            icon: Users,
            title: "Wide Exposure",
            description: "Access our network of buyers and financing options for potential purchasers."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-grow">
                <PageHero
                    title="Vehicle Consignment"
                    subtitle="Let us sell your vehicle for you. Safe, simple, and profitable."
                    backgroundImage="/hero-cinematic.png"
                />

                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Consign With Us?</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Selling a car privately can be a hassle. From lowball offers to scheduling test drives with strangers, it takes time and effort.
                                Our consignment program takes the stress out of selling while helping you get the best possible price for your vehicle.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We treat your vehicle like our own inventory, providing professional detailing, photography, and marketing to ensure it stands out to potential buyers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
                                    <Link to="/contact">Start Consignment</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/trade-in">Value Your Trade Instead</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-16">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                            <p className="text-muted-foreground">
                                Our simple 3-step process makes selling your car effortless.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-xl font-bold text-primary z-10 relative">
                                    1
                                </div>
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-0" />
                                <h3 className="text-xl font-bold mb-3">Evaluation</h3>
                                <p className="text-muted-foreground">
                                    Bring your vehicle in for a professional appraisal. We'll agree on a target selling price together.
                                </p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-xl font-bold text-primary z-10 relative">
                                    2
                                </div>
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-0" />
                                <h3 className="text-xl font-bold mb-3">Preparation & Listing</h3>
                                <p className="text-muted-foreground">
                                    We detail, photograph, and list your vehicle on major platforms, handling all inquiries.
                                </p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-xl font-bold text-primary z-10 relative">
                                    3
                                </div>
                                <h3 className="text-xl font-bold mb-3">Sale & Payment</h3>
                                <p className="text-muted-foreground">
                                    Once sold, we handle the paperwork and financing for the buyer, and you get paid.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Consignment;
