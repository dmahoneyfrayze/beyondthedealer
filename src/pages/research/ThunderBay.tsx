import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ThunderBay = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-accent-foreground">
            <Helmet>
                <title>Why Thunder Bay Shoppers Choose Beyond the Dealership</title>
                <meta name="description" content="Discover why car buyers in Thunder Bay are looking west to Manitoba for better deals, premium inventory, and a seamless buying experience." />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative py-20 bg-black text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="/hero-cinematic.png"
                            alt="Premium Vehicle Delivery"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection>
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-2 text-accent mb-4 font-semibold tracking-wider uppercase text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>Thunder Bay • Kenora • Northern Ontario</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                    Why Thunder Bay is <br />
                                    <span className="text-accent">Looking West.</span>
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    Discerning buyers in Northern Ontario are discovering that the best deals—and the best vehicles—aren't always around the corner.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-8">
                                <AnimatedSection delay={100}>
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <p className="lead text-2xl font-light text-muted-foreground mb-8">
                                            For years, car shoppers in Thunder Bay and Northwestern Ontario have faced a challenge: limited local inventory and less-than-competitive pricing due to market isolation.
                                        </p>

                                        <h3>The Inventory Advantage</h3>
                                        <p>
                                            By expanding their search radius just slightly west to Manitoba, buyers gain access to a significantly larger and more diverse market. At <strong>Beyond the Dealership</strong>, we curate a premium selection of vehicles that often aren't available locally in smaller markets.
                                        </p>

                                        <h3>The "Manitoba Advantage" on Pricing</h3>
                                        <p>
                                            It's an open secret in the industry: vehicles in Manitoba are often priced more competitively than in Northern Ontario. Larger volume dealers and a more competitive local market drive prices down—savings that we pass directly to our cross-border clients.
                                        </p>

                                        <div className="bg-secondary/30 p-8 rounded-xl my-8 border-l-4 border-accent">
                                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                <Truck className="w-6 h-6 text-accent" />
                                                Seamless Delivery to Your Door
                                            </h4>
                                            <p className="mb-0">
                                                We've mastered the logistics of serving Northern Ontario. Whether you're in Kenora, Dryden, or Thunder Bay, we can arrange secure, insured transport right to your driveway. You get the car you want, without the 8-hour drive.
                                            </p>
                                        </div>

                                        <h3>Transparent, Digital-First Buying</h3>
                                        <p>
                                            We understand that buying a car remotely requires trust. That's why we offer:
                                        </p>
                                        <ul className="space-y-2 list-none pl-0">
                                            {[
                                                "High-definition video walkthroughs of every vehicle",
                                                "Detailed mechanical inspection reports",
                                                "Transparent, all-in pricing with no hidden fees",
                                                "Digital financing approvals before you commit"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <h3>Join the Movement</h3>
                                        <p>
                                            Don't settle for what's on the lot down the street. Experience the difference of buying from a premium inventory with a team that understands the needs of Northern Ontario drivers.
                                        </p>
                                    </div>

                                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                        <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                                            <Link to="/used">Browse Inventory</Link>
                                        </Button>
                                        <Button asChild variant="outline" size="lg">
                                            <Link to="/finance">Get Pre-Approved</Link>
                                        </Button>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Sidebar */}
                            <div className="md:col-span-4 space-y-8">
                                <AnimatedSection delay={200}>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border">
                                        <h3 className="text-xl font-bold mb-4">Popular in Northern Ontario</h3>
                                        <ul className="space-y-3">
                                            <li>
                                                <Link to="/used?body=Truck" className="flex items-center justify-between group hover:text-accent transition-colors">
                                                    <span>Pickup Trucks</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/used?body=SUV" className="flex items-center justify-between group hover:text-accent transition-colors">
                                                    <span>AWD SUVs</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/used?make=Jeep" className="flex items-center justify-between group hover:text-accent transition-colors">
                                                    <span>Jeep Wranglers</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ThunderBay;
