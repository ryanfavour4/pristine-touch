import Navbar from "@/layouts/top-nav-bar";
import { Icon } from "@iconify/react";
import Footer from "@/layouts/footer";
import { Cta2Section } from "../home/sections";
import { Link } from "react-router";

const safeFeatures = [
    {
        icon: "eos-icons:cleanup",
        name: "Industrial Cleaning",
        desc: "Specialized cleaning for factories, warehouses, and commercial facilities. We handle heavy-duty equipment cleaning, floor degreasing, and industrial debris removal to maintain a safe working environment.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Deep Cleaning",
        desc: "Intensive cleaning that reaches every corner of your space. We clean behind furniture, sanitize hard-to-reach areas, and eliminate deep-seated dirt and allergens for a thoroughly refreshed environment.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Post-construction Cleaning",
        desc: "Comprehensive cleanup after construction or renovation work. We remove dust, debris, and construction residue while ensuring your space is safe and ready for occupancy.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Routine Cleaning",
        desc: "Regular maintenance cleaning to keep your home fresh and tidy. Includes dusting, vacuuming, mopping, and general tidying to maintain a clean, healthy living space.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Office Cleaning",
        desc: "Professional cleaning tailored for office environments. We sanitize workstations, meeting rooms, restrooms, and common areas to create a productive and hygienic workplace.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Move in & Out Cleaning",
        desc: "Thorough cleaning for properties during transitions. Perfect for preparing a new home for move-in or leaving a property spotless when moving out.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Halls & Event Cleaning",
        desc: "Pre and post-event cleaning services for halls, venues, and event spaces. We ensure your venue is immaculate before guests arrive and spotless after the celebration ends.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Tank Wash",
        desc: "Professional cleaning and maintenance of water tanks and cisterns. We ensure thorough disinfection and removal of sediment to guarantee safe, clean water supply.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Window Cleaning",
        desc: "Expert window and glass cleaning for residential and commercial properties. We clean interior and exterior windows, leaving them streak-free and crystal clear.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "eos-icons:cleanup",
        name: "Rug Wash",
        desc: "Professional rug and carpet cleaning that removes deep-set dirt, stains, and allergens. Our specialized equipment restores the beauty and extends the life of your rugs.",
        bottomText: "From: NGN 10,000.00",
    },
];

const propertyFeatures = [
    {
        icon: "solar:buildings-bold-duotone",
        name: "Residential Property Management",
        desc: "Ongoing care for homes, including maintenance checks, cleaning support, and coordination of repairs.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Commercial Property Management",
        desc: "Professional maintenance for offices and retail spaces, with cleaning, waste handling, and common area upkeep.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Industrial Property Management",
        desc: "Scheduled facility care for warehouses and factories, with cleaning, inspections, and infrastructure support.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Project Supervision",
        desc: "On-site oversight of maintenance and renovation works to ensure quality, timeliness, and safety.",
        bottomText: "From: NGN 10,000.00",
    },
    {
        icon: "solar:buildings-bold-duotone",
        name: "Project Management",
        desc: "Full project coordination from planning through completion, keeping budgets and schedules on track.",
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

