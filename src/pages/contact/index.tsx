import ContactForm from "@/layouts/contact-form";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/top-nav-bar";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { CtaSection } from "../home/sections";

const contactMethods = [
    {
        icon: "mdi:phone",
        title: "Call Us",
        details: "+234 906 895 4673",
        description: "Mon-Sun, 9AM-9PM WAT",
        url: "tel:+2349068954673",
    },
    {
        icon: "mdi:email",
        title: "Email Us",
        details: "pristinetouch001@gmail.com",
        description: "We'll reply within 24 hours",
        url: "mailto:pristinetouch001@gmail.com",
    },
    {
        icon: "mdi:instagram",
        title: "Instagram",
        details: "Tap to send us message via Instagram",
        description: "Office 1",
        url: "https://www.instagram.com/pristine-touch",
    },
    {
        icon: "mdi:whatsapp",
        title: "WhatsApp",
        details: "Tap to send us message via Whatsapp",
        description: "24/7 support available",
        url: "https://api.whatsapp.com/send/?phone=2349068954673&text&type=phone_number&app_absent=0",
    },
    // {
    //     icon: "mdi:map-marker",
    //     title: "Visit Us",
    //     details: "26 ST John, Manchester,UK",
    //     description: "Office 2",
    // },
];

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header className="bg-dark-grey min-h-96 bg-book-now-cta-section relative md:mb-28 mb-96">
                {/* Nav */}
                <nav className="relative z-20 pb-16 flex flex-col items-center px-2">
                    <Navbar />
                </nav>

                {/* HERO SECTION */}
                <section className="container gap-6 px-4 items-center justify-center flex flex-col w-full text-light pt-0 pb-120">
                    <span className="text-xs flex items-center font-semibold w-fit border text-dark-grey/75 bg-secondary border-secondary px-5 p-1.5 rounded-full mb-2">
                        <p>Book Now</p>
                    </span>
                    <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl text-center">
                        Get Your Free Quote
                    </h2>
                    <p className="text-lg max-w-lg text-center">
                        Fill out the form below or reach out via whatsapp for an
                        instant response. We’ll get back to you within 24 hours.
                    </p>
                </section>

                <section className="w-full h-fit mx-auto px-2 absolute -bottom-96 md:-bottom-36">
                    <ContactForm />
                </section>
            </header>

            {/* CTA */}
            <div className="py-16 container px-2 md:pt-24 max-w-3xl">
                <h4 className="max-w-3xl mx-auto md:text-5xl text-4xl font-semibold text-center">
                    Contact Info
                </h4>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 mt-8">
                    {contactMethods.map((service) => (
                        <div className="flex items-center p-2 border rounded-xl max-w-xl border-dark-grey/5 gap-4 bg-light-fade">
                            <span className="bg-primary rounded-full w-14 h-14 aspect-square">
                                <Icon
                                    icon={service.title}
                                    className="w-full aspect-square object-contain max-w-16 mx-auto"
                                />
                            </span>
                            <div className="col-span-2">
                                <h3 className="text-xl text-dark font-semibold">
                                    {service.title}
                                </h3>
                                <a
                                    href={service.url}
                                    className={`text-sm text-dark-grey/75 underline`}
                                >
                                    {service.details}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CtaSection />
            <Footer />
        </>
    );
}

