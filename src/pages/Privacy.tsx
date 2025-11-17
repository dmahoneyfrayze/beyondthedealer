import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - Olympic Hyundai Vancouver</title>
        <meta name="description" content="Olympic Hyundai Vancouver privacy policy. Learn how we protect your personal information and respect your privacy." />
      </Helmet>

      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Card>
            <CardContent className="p-8 prose prose-slate max-w-none">
              <h2>Your Privacy Matters</h2>
              <p>
                At Olympic Hyundai Vancouver, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <h3>Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address</li>
                <li><strong>Financial Information:</strong> Credit application details (when you apply for financing)</li>
                <li><strong>Vehicle Information:</strong> Trade-in details, vehicle preferences, and browsing history</li>
                <li><strong>Technical Information:</strong> IP address, browser type, and device information</li>
              </ul>

              <h3>How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Process your vehicle purchase, trade-in, or financing application</li>
                <li>Communicate with you about our products, services, and special offers</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Provide customer support and respond to your inquiries</li>
              </ul>

              <h3>Information Sharing</h3>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul>
                <li>Financial institutions for credit applications and loan processing</li>
                <li>Service providers who assist with our business operations</li>
                <li>Legal authorities when required by law</li>
                <li>Hyundai Motor America and affiliated dealerships for warranty and service purposes</li>
              </ul>

              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized 
                access, disclosure, alteration, or destruction. However, no method of transmission over the internet 
                is 100% secure.
              </p>

              <h3>Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
              </ul>

              <h3>Cookies and Tracking</h3>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie preferences through your browser settings.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
              </p>
              <p>
                <strong>Olympic Hyundai Vancouver</strong><br />
                Phone: (604) 555-0100<br />
                Email: privacy@olympichyundai.com<br />
                Address: Vancouver, BC
              </p>

              <h3>Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                posting the new policy on this page with an updated "Last Updated" date.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
