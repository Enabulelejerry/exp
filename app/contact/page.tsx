import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="container py-12 sm:py-16 md:py-24">
      {/* Header */}
      <section className="text-center mb-10 sm:mb-16 md:mb-24">
        <h1
          className="font-bold tracking-tight text-balance leading-tight
                     text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4"
        >
          Get in Touch with Experia Energy
        </h1>
        <p
          className="text-pretty text-muted-foreground mx-auto px-4
                     max-w-[42rem] sm:max-w-3xl
                     text-base sm:text-lg md:text-xl"
        >
          We're here to answer your questions, discuss your project needs, or
          explore partnership opportunities. Reach out to us through the form
          below or directly via our contact details.
        </p>
      </section>

      {/* Content */}
      <section className="bg-muted/60 p-4 sm:p-6 md:p-8 rounded-2xl shadow-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-primary font-bold text-xl sm:text-2xl md:text-3xl">
              Contact Information
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Email Us
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    For general inquiries, please email us at:
                  </p>
                  <ul className="mt-1 sm:mt-2 space-y-1">
                    <li>
                      <a
                        href="mailto:info@experiaenergy.org"
                        className="text-primary hover:underline"
                      >
                        info@experiaenergy.org
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:experiaenergy@gmail.com"
                        className="text-primary hover:underline"
                      >
                        experiaenergy@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Call Us
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Speak directly with our team:
                  </p>
                  <ul className="mt-1 sm:mt-2 space-y-1">
                    <li>
                      <a
                        href="tel:+2348037080584"
                        className="text-primary hover:underline"
                      >
                        +234 803 708 0584
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+2348059245917"
                        className="text-primary hover:underline"
                      >
                        +234 805 924 5917
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPinIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Our Office
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Visit us at our headquarters:
                  </p>
                  <address className="not-italic text-primary mt-1 sm:mt-2">
                    24 Isiokpo Street, D-Line, Port Harcourt, Nigeria
                  </address>
                </div>
              </div>
            </div>

            {/* Map placeholder (responsive aspect, not fixed height) */}
            <div className="w-full rounded-xl overflow-hidden border border-border bg-background shadow-sm">
              <div className="aspect-[16/10] md:aspect-[21/9] flex items-center justify-center text-muted-foreground">
                <p className="text-sm sm:text-base px-4">
                  Google Map Integration Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl bg-background border border-border shadow-sm p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
