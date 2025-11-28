import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Car, DollarSign, GraduationCap, Globe, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const ResearchHub = () => {
    const articles = [
        {
            title: "Why Thunder Bay Chooses BTD",
            description: "Discover why car buyers in Thunder Bay are looking west to Manitoba for their next vehicle.",
            icon: Globe,
            link: "/research/thunder-bay",
            category: "Regional Guide"
        },
        {
            title: "New vs. Used Guide",
            description: "A comprehensive comparison to help you decide whether a new or used vehicle is right for you.",
            icon: Car,
            link: "/research/new-vs-used",
            category: "Buying Guide"
        },
        {
            title: "Finance vs. Lease",
            description: "Understanding the differences between financing and leasing to make the best financial decision.",
            icon: DollarSign,
            link: "/research/finance-vs-lease",
            category: "Financial Advice"
        },
        {
            title: "Student Programs",
            description: "Special financing programs and discounts available for students and recent graduates.",
            icon: GraduationCap,
            link: "/research/student-programs",
            category: "Special Programs"
        },
        {
            title: "New to Canada",
            description: "Everything you need to know about buying a car as a newcomer to Canada.",
            icon: Globe,
            link: "/research/new-to-canada",
            category: "Special Programs"
        },
        {
            title: "EV & Hybrid Guide",
            description: "Learn about electric and hybrid vehicles, incentives, and charging infrastructure.",
            icon: Zap,
            link: "/ev-hybrid-guide-bc",
            category: "Technology"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-grow">
                <PageHero
                    title="Research & Resources"
                    subtitle="Expert guides, tips, and insights to help you make informed decisions."
                    backgroundImage="/hero-cinematic.png"
                />

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <article.icon className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            {article.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {article.description}
                                    </p>
                                    <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all">
                                        <Link to={article.link} className="flex items-center">
                                            Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Newsletter / CTA Section */}
                    <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
                        <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Subscribe to our newsletter for the latest automotive news, buying tips, and exclusive offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <Button asChild size="lg" className="w-full sm:w-auto">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                                <Link to="/used">Browse Inventory</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ResearchHub;
