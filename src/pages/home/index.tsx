import Navbar from "@/layouts/top-nav-bar";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import imageCleaning1 from "/public/images/image-cleaning-1.jpeg";
import imageCleaning2 from "/public/images/image-cleaning-2.jpeg";
import imageCleaning3 from "/public/images/image-cleaning-3.jpeg";
import imageCleaning4 from "/public/images/image-cleaning-4.jpeg";
import Footer from "@/layouts/footer";
import { CtaSection } from "./sections";

const whyChooseUs = [
    {
        title: "Trusted Professional",
        desc: "Every team member is background-checked, trained, and committed to excellence.",
    },
    {
        title: "Personalized Service",
        desc: "We tailor our cleaning approach to your specific needs and preferences.",
    },
    {
        title: "Satisfaction Guaranteed",
        desc: "Not happy? We’ll coe back and make it right, no questions asked.",
    },
];

const benefits = [
    "Vetted professionals",
    "Affordable Prices",
    "Next day availability",
    "Best Quality",
    "Standard cleaning tasks",
    "Affordable Prices",
];

const safeFeatures = [
    {
        icon: "temaki:room",
        name: "Property Management",
        desc: "Professional management and maintenance for your residential or commercial property.",
        bottomText: "From: NGN 30,000.00",
    },
    {
        icon: "cbi:roomsbathroom",
        name: "Specialized Request Cleanup",
        desc: "From tanks wash, rugs, window cleaning or post construction cleanup we are here.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "mingcute:house-2-fill",
        name: "Full House Clean",
        desc: "Complete top-to-buttom cleaning for your entire home.",
        bottomText: "From: NGN 10,000.00",
    },
];

export default function HomePage() {
    return (
        <>
            <header className="bg-light min-h-96 h-dvh bg-hero-image">
                {/* Nav */}
                <nav className="relative z-20 pb-16 md:pb-24 flex flex-col items-center px-2">
                    <Navbar />
                </nav>

                {/* HERO SECTION */}
                <section className="container max-w-4xl py-16 mx-auto px-2 text-center">
                    <div className="flex flex-col gap-6 w-full text-light">
                        <p className="text-lg">
                            Quality cleaning at a fair price.
                        </p>
                        <h1 className="md:text-5xl text-4xl font-bold">
                            Property Management and Cleaning Service
                        </h1>
                        <div className="flex items-center justify-center gap-1 flex-col">
                            <p className="md:text-xl text-lg max-w-xl mx-auto">
                                We provide property management, regular house
                                check-ups and cleaning service regardless of
                                your availability or location, your satisfaction
                                is our priority
                            </p>
                            <div className="flex items-center justify-center gap-1 md:gap-3 mt-4 mb-6 flex-wrap">
                                <Link
                                    to="/book-now"
                                    className="btn-primary text-center w-fit"
                                >
                                    Get Start Now
                                </Link>
                                <Link
                                    to="/service"
                                    className="btn-ghost text-center w-fit"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            {/* SERVICES */}
            <section id="services" className="py-10 bg-light md:pb-32">
                <div className="container flex flex-col gap-4 items-center px-2.5">
                    <div className="md:grid grid-cols-2 flex flex-col gap-4 border-primary border-b pb-6">
                        <span>
                            <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                                <p>What We Offer</p>
                            </span>
                            <h2 className="md:text-5xl text-4xl font-bold">
                                Cleaning Services & Property Management
                            </h2>
                        </span>
                        <span className="md:max-w-md text-justify md:ml-auto text-lg text-grey  mt-1 block">
                            <p className="md:text-xl text-dark text-lg font-semibold">
                                Services
                            </p>

                            <p className="">
                                From single touch-ups to complete home
                                transformations, we have the perfect cleaning
                                solution for your needs.
                            </p>
                        </span>
                    </div>

                    <div className="items-center gap-6 mt-2 w-full px-2 md:grid md:grid-cols-3 grid-cols-1 place-items-center flex flex-col">
                        {safeFeatures.map((feat) => (
                            <section className="w-full flex border border-dark-grey/10 hover:bg-primary text-light flex-col mx-auto gap-4 bg-white p-4 rounded-xl shadow group duration-300 transition">
                                <div className="bg-primary aspect-square w-10 flex items-center justify-center rounded-lg text-light text-xl">
                                    <Icon icon={feat.icon} />
                                </div>
                                <span className="flex flex-col gap-1.5 max-w-2xs text-dark-grey/75">
                                    <h4 className="text-xl font-medium text-dark group-hover:text-light">
                                        {feat.name}
                                    </h4>
                                    <p className="text-dark-grey/50 group-hover:text-light">
                                        {feat.desc}
                                    </p>
                                    <p className="text-dark-grey/75 text-base group-hover:text-light mt-2">
                                        {feat.bottomText}
                                    </p>
                                </span>
                            </section>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUOTE */}
            <section className="bg-light py-10 text-dark/75">
                <div className="container gap-6 px-4 flex-col flex lg:gap-20 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-2 w-full">
                        <p>Affordable cleaning solutions</p>
                        <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl text-dark">
                            High-Quality and Friendly Services at Fair Prices
                        </h2>

                        <p className="text-lg max-w-lg">
                            We provide comprehensive cleaning services tailored
                            to your needs. From residential cleaning services
                        </p>
                        <Link
                            to="/book-now"
                            className="btn-primary w-fit px-8 flex items-center gap-2 mt-6"
                        >
                            <p>Get a quote</p>
                            <Icon icon={"tabler:arrow-right"} />
                        </Link>
                    </div>
                    <div className="flex relative items-end justify-end pb-10">
                        <div className="relative">
                            <img
                                src={imageCleaning1}
                                alt="imageCleaning1"
                                className="aspect-square md:max-w-sm rounded-2xl border-r-10 border-t-10 border-primary object-cover"
                            />
                            <img
                                src={imageCleaning2}
                                alt="imageCleaning2"
                                className="md:-bottom-15 md:-left-25 left-[0%] -bottom-10 absolute aspect-square max-w-3xs md:max-w-2xs rounded-2xl border-10 border-light object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY US? */}
            <section className="bg-light py-10 text-dark/75">
                <div className="container gap-6 px-4 flex-col flex lg:gap-20 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                            <p>Why Us?</p>
                        </span>
                        <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl text-dark">
                            Why Choose cleanqnect?
                        </h2>

                        <p className="text-lg max-w-lg">
                            See Top-notch reason why you should work with us,
                            and have every believe to know we can serve you
                            right.
                        </p>
                    </div>
                    <div className="flex relative items-end justify-end pb-10">
                        <div className="flex flex-col gap-6 justify-between">
                            {whyChooseUs.map((service) => (
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
                                        <p className="text-sm text-dark-grey/75">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-light py-10 text-dark/75">
                <div className="container gap-6 px-4 flex-col flex lg:gap-20 lg:grid lg:grid-cols-2">
                    <div className="flex relative items-start justify-start pb-10">
                        <div className="relative">
                            <img
                                src={imageCleaning3}
                                alt="imageCleaning3"
                                className="aspect-square md:max-w-sm rounded-2xl border-l-10 border-t-10 border-primary object-cover"
                            />
                            <img
                                src={imageCleaning4}
                                alt="imageCleaning4"
                                className="md:-bottom-15 md:-right-25 right-[0%] -bottom-10 absolute aspect-square max-w-3xs md:max-w-2xs rounded-2xl border-10 border-light object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl text-dark">
                            Welcome To Our Pro-cleaning Company!
                        </h2>

                        <p className="text-lg max-w-lg">
                            We make your space shine! Professional and reliable
                            cleaning service company providing top-notch
                            solutions for homes and businesses. Satisfaction
                            guaranteed!"
                        </p>

                        <ul className="grid grid-cols-2 gap-4">
                            {benefits.map((item) => (
                                <li className="flex items-center gap-2 p-2 rounded-sm bg-[#F5F4F4]">
                                    <Icon
                                        icon={"icon-park-solid:check-one"}
                                        className="text-accent"
                                    />
                                    <p className="font-semibold">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/book-now"
                            className="btn-primary w-fit px-8 flex items-center gap-2 mt-6"
                        >
                            <p>Book Now</p>
                            <Icon icon={"tabler:arrow-right"} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaSection />

            <Footer />
        </>
    );
}

