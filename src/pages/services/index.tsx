import Navbar from "@/layouts/top-nav-bar";
import { Icon } from "@iconify/react";
import Footer from "@/layouts/footer";
import { Cta2Section } from "../home/sections";
import { Link } from "react-router";

const safeFeatures = [
    {
        icon: "eos-icons:cleanup",
        name: "Room Cleaning",
        desc: "Perfect for targetting specific areas. Our room cleaning services covers dusting, vacumming, mopping, and surface cleaning for individual rooms.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Bathroom Deep Clean",
        desc: "Our most thourough bathroom service. We sanitize every surface, remove limescale, and leave your bathroom sparking and germ-free.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Full House Clean",
        desc: "Complete top-to-buttom cleaning for your entire home.",
        bottomText: "From: NGN 10,000.00",
    },
];

const propertyFeatures = [
    {
        icon: "solar:buildings-bold-duotone",
        name: "Room Cleaning",
        desc: "Perfect for targetting specific areas. Our room cleaning services covers dusting, vacumming, mopping, and surface cleaning for individual rooms.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Bathroom Deep Clean",
        desc: "Our most thourough bathroom service. We sanitize every surface, remove limescale, and leave your bathroom sparking and germ-free.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Full House Clean",
        desc: "Complete top-to-buttom cleaning for your entire home.",
        bottomText: "From: NGN 10,000.00",
    },
];

export default function ServicePage() {
    return (
        <>
            <header className="bg-dark-grey min-h-96">
                {/* Nav */}
                <nav className="relative z-20 pb-16 md:pb-24 flex flex-col items-center px-2">
                    <Navbar />
                </nav>

                {/* HERO SECTION */}
                <section className="container gap-6 px-4 items-center justify-center flex flex-col w-full text-light pt-5 py-32">
                    <span className="text-xs flex items-center font-semibold w-fit border text-dark-grey/75 bg-secondary border-secondary px-5 p-1.5 rounded-full mb-2">
                        <p>Our Services</p>
                    </span>
                    <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl text-center">
                        Cleaning Solutions for Every Need{" "}
                    </h2>
                    <p className="text-lg max-w-lg text-center">
                        From quick touch-ups to deep cleaning transformations,
                        we offer flexible services designed to fit your
                        lifestyle and budget.
                    </p>
                </section>
            </header>

            {/* SERVICES */}
            <section id="services" className="py-10 bg-light md:pb-20">
                <div className="container  px-2.5">
                    <div className="md:grid grid-cols-2 flex flex-col gap-4 border-primary border-b pb-6">
                        <span>
                            <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                                <p>Service Types</p>
                            </span>
                            <h2 className="md:text-5xl text-4xl font-bold">
                                Cleaning Services
                            </h2>
                        </span>
                        <span className="md:max-w-md text-justify md:ml-auto text-lg text-grey  mt-1 block">
                            <p className="">
                                From single touch-ups to complete home
                                transformations, we have the perfect cleaning
                                solution for your needs.
                            </p>
                        </span>
                    </div>
                </div>

                <div className="container max-w-5xl gap-6 mt-2 md:mt-6 w-full px-2 md:grid md:grid-cols-3 grid-cols-1 flex flex-col">
                    {safeFeatures.map((feat) => (
                        <section className="w-full flex border border-dark-grey/10 hover:bg-primary text-light flex-col mx-auto gap-4 bg-white p-4 rounded-xl shadow group duration-300 transition">
                            <div className="bg-primary aspect-square w-10 flex items-center justify-center rounded-lg text-light text-xl">
                                <Icon icon={feat.icon} />
                            </div>
                            <span className="flex flex-col gap-1.5 text-dark-grey/75 h-full">
                                <h4 className="text-xl font-medium text-dark group-hover:text-light">
                                    {feat.name}
                                </h4>
                                <p className="text-dark-grey/50 group-hover:text-light mb-8">
                                    {feat.desc}
                                </p>
                                <hr className="mt-auto border-dark-grey/25" />
                                <p className="text-dark-grey/75 text-base group-hover:text-light my-2 hidden">
                                    {feat.bottomText}
                                </p>
                                <Link
                                    to={`/book-now?service=${feat.name}`}
                                    className="btn-primary group-hover:bg-light group-hover:text-primary"
                                >
                                    Book Now
                                </Link>
                            </span>
                        </section>
                    ))}
                </div>
            </section>

            <hr />

            {/* SERVICES */}
            <section id="services" className="py-10 bg-light md:pb-20">
                <div className="container  px-2.5">
                    <div className="md:grid grid-cols-2 flex flex-col gap-4 border-primary border-b pb-6">
                        <span>
                            <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                                <p>Service Types</p>
                            </span>
                            <h2 className="md:text-5xl text-4xl font-bold">
                                Property Management
                            </h2>
                        </span>
                        <span className="md:max-w-md text-justify md:ml-auto text-lg text-grey  mt-1 block">
                            <p className="">
                                At pristine touch our property management
                                service is directed towards property
                                maintenance, carry out tasks like: Landscaping,
                                Inspection & Routine cleanup Fumigation,
                                Painting etc.
                            </p>
                        </span>
                    </div>
                </div>

                <div className="container max-w-5xl gap-6 mt-2 md:mt-6 w-full px-2 md:grid md:grid-cols-3 grid-cols-1 flex flex-col">
                    {propertyFeatures.map((feat) => (
                        <section className="w-full flex border border-dark-grey/10 hover:bg-primary text-light flex-col mx-auto gap-4 bg-white p-4 rounded-xl shadow group duration-300 transition">
                            <div className="bg-primary aspect-square w-10 flex items-center justify-center rounded-lg text-light text-xl">
                                <Icon icon={feat.icon} />
                            </div>
                            <span className="flex flex-col gap-1.5 text-dark-grey/75 h-full">
                                <h4 className="text-xl font-medium text-dark group-hover:text-light">
                                    {feat.name}
                                </h4>
                                <p className="text-dark-grey/50 group-hover:text-light mb-8">
                                    {feat.desc}
                                </p>
                                <hr className="mt-auto border-dark-grey/25" />
                                <p className="text-dark-grey/75 text-base group-hover:text-light my-2 hidden">
                                    {feat.bottomText}
                                </p>
                                <Link
                                    to={`/book-now?service=${feat.name}`}
                                    className="btn-primary group-hover:bg-light group-hover:text-primary"
                                >
                                    Book Now
                                </Link>
                            </span>
                        </section>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <Cta2Section />

            <Footer />
        </>
    );
}

