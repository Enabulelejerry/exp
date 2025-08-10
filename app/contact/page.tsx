import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="container py-16 md:py-24">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get in Touch with Experia Energy
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to answer your questions, discuss your project needs, or
          explore partnership opportunities. Reach out to us through the form
          below or directly via our contact details.
        </p>
      </section>

      <section className="bg-muted p-8 rounded-lg shadow-inner">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MailIcon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">
                  For general inquiries, please email us at:
                </p>
                <Link
                  href="mailto:info@experiaenergy.com"
                  className="text-primary hover:underline transition-colors"
                >
                  info@experiaenergy.org
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">
                  Speak directly with our team:
                </p>
                <p>
                  <Link
                    href="tel:08037080584"
                    className="text-primary hover:underline transition-colors"
                  >
                    +(234) 8037080584
                  </Link>
                </p>

                <p>
                  <Link
                    href="tel:08059245917"
                    className="text-primary hover:underline transition-colors"
                  >
                    +(234) 8059245917
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPinIcon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-muted-foreground">
                  Visit us at our headquarters:
                </p>
                <address className="not-italic text-primary">
                  24 Isiokpo Street, D-Line, Port Harcourt, Nigeria
                </address>
              </div>
            </div>
          </div>
          <div className="w-full h-64 bg-background rounded-lg overflow-hidden shadow-md flex items-center justify-center text-muted-foreground border border-border">
            {/* Placeholder for Google Map */}
            <p>Google Map Integration Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
