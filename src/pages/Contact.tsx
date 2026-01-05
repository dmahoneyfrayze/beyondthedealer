import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Contact Us | Beyond the Dealership</title>
                <meta name="description" content="Contact Beyond the Dealership. We serve Manitoba and Ontario with premium used vehicles and nationwide delivery." />
                <link rel="canonical" href="https://beyondthedealership.ca/contact" />
            </Helmet>

            <Header />

            <main className="flex-grow bg-background">
                <PageHero
                    title="Contact Us"
                    subtitle="We're here to help you find your perfect vehicle."
                    backgroundImage="/hero-cinematic.png"
                />

                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground text-lg">
                                    Have questions about a vehicle, financing, or our delivery process?
                                    Our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="shadow-card hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                            <p className="text-muted-foreground mb-2">Call or Text us anytime</p>
                                            <a href="tel:204-297-6177" className="text-xl font-bold text-primary hover:underline">
                                                (204) 297-6177
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="shadow-card hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Email</h3>
                                            <p className="text-muted-foreground mb-2">Send us a message</p>
                                            <a href="mailto:Beyondthedealership@icloud.com" className="text-lg font-medium hover:text-primary transition-colors">
                                                Beyondthedealership@icloud.com
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="shadow-card hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Location</h3>
                                            <p className="text-muted-foreground">
                                                Serving Manitoba & Ontario<br />
                                                Based in Winnipeg, MB
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <Card className="h-full shadow-card">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-4 border-b">
                                            <span className="font-medium">Monday - Friday</span>
                                            <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b">
                                            <span className="font-medium">Saturday</span>
                                            <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b">
                                            <span className="font-medium">Sunday</span>
                                            <span className="text-primary font-medium">By Appointment</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-primary mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold mb-1">24/7 Digital Service</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Browse inventory, apply for financing, and message us anytime. We respond as quickly as possible.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
