import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service - Olympic Hyundai Vancouver</title>
        <meta name="description" content="Terms of Service for Olympic Hyundai Vancouver. Review our terms and conditions for using our website and services." />
      </Helmet>

      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg opacity-90">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Card>
            <CardContent className="p-8 prose prose-slate max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using the Olympic Hyundai Vancouver website, you agree to be bound by these Terms of 
                Service. If you do not agree with any part of these terms, please do not use our website.
              </p>

              <h3>Use of Website</h3>
              <p>You agree to use this website for lawful purposes only. You may not:</p>
              <ul>
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Scrape or copy content without permission</li>
              </ul>

              <h3>Pricing and Availability</h3>
              <p>
                All vehicle prices listed on this website are in Canadian dollars and are subject to change without notice. 
                Prices exclude applicable taxes, licensing fees, registration, documentation fees, and any optional 
                products or services.
              </p>
              <p>
                <strong>British Columbia Disclosure:</strong> The prices shown do not include PST, GST, air conditioning tax, 
                tire stewardship fee, PPSA registration, dealer documentation fee, or any applicable licensing and 
                registration costs. Final pricing will be provided during the purchase process.
              </p>
              <p>
                Vehicle availability is subject to prior sale. We make every effort to ensure accuracy, but errors may occur. 
                Please verify all information with a sales representative before making a purchase decision.
              </p>

              <h3>Financing Estimates</h3>
              <p>
                Payment calculations and financing estimates provided on this website are for illustrative purposes only 
                and do not constitute a financing offer. Actual rates, terms, and payments are subject to credit approval 
                and may vary based on your creditworthiness, down payment, trade-in value, and other factors.
              </p>
              <p>
                All financing is subject to lender approval. We work with multiple financial institutions to help find 
                financing solutions for all credit situations.
              </p>

              <h3>Vehicle Information</h3>
              <p>
                We strive to provide accurate vehicle information, including descriptions, specifications, features, 
                mileage, and condition. However, errors may occur. Please inspect any vehicle in person and verify all 
                details before purchase. All used vehicles are sold "as-is" unless otherwise stated in writing.
              </p>

              <h3>Trade-In Valuations</h3>
              <p>
                Trade-in value estimates provided through our online tools are approximate and subject to physical 
                inspection. Final trade-in values may differ based on actual vehicle condition, market conditions, and 
                other factors.
              </p>

              <h3>Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                Olympic Hyundai Vancouver or its licensors and is protected by copyright and intellectual property laws.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                Olympic Hyundai Vancouver shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from your use of this website or any services obtained through it.
              </p>

              <h3>Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy 
                practices, or terms of service of these external sites.
              </p>

              <h3>Modifications</h3>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>

              <h3>Governing Law</h3>
              <p>
                These Terms of Service are governed by the laws of British Columbia, Canada. Any disputes shall be 
                resolved in the courts of British Columbia.
              </p>

              <h3>Contact Information</h3>
              <p>
                For questions about these Terms of Service, please contact:
              </p>
              <p>
                <strong>Olympic Hyundai Vancouver</strong><br />
                Phone: (604) 555-0100<br />
                Email: info@olympichyundai.com<br />
                Address: Vancouver, BC
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
