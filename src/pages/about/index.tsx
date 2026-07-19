import Navbar from "@/layouts/top-nav-bar";
import { Icon } from "@iconify/react";
import blackImage from "/public/images/blank-stock.png";
import imageCleaning1 from "/public/images/image-cleaning-1.jpeg";
import Footer from "@/layouts/footer";
import { CtaSection } from "../home/sections";

const ourValues = [
    {
        icon: "ion:id-card-outline",
        name: "Passion for Cleaning",
        desc: "We genuinely love what we do and take pride in every spotless surface.",
    },
    {
        icon: "ion:id-card-outline",
        name: "Customer First",
        desc: "Your satisfaction is our top priority. We listen and adapt to your needs.",
    },
    {
        icon: "ion:id-card-outline",
        name: "Trust & Safety",
        desc: "Fully insured and background-checked teams you can rely on.",
    },
    {
        icon: "ion:id-card-outline",
        name: "Reliability",
        desc: "We show up on time, every time, and always deliver as promised.",
    },
];

const stats = [
    { title: "Years of Experience", number: "10+" },
    { title: "Team Members", number: "25+" },
    { title: "Clients Satisfaction", number: "98%" },
];

const ourTeam = [
    {
        image: blackImage,
        title: "Founder",
        description: "Gabriel Famingo",
    },
    {
        image: blackImage,
        title: "Program Manager",
        description: "Chioma Passionate",
    },
    {
        image: blackImage,
        title: "COO",
        description: "Salem Nwanko",
    },
];

export default function AboutPage() {
    return (
        <>
            <header className="bg-dark-grey min-h-96">
                {/* Nav */}
                <nav className="relative z-20 pb-16 md:pb-24 flex flex-col items-center px-2">
                    <Navbar />
                </nav>

                {/* HERO SECTION */}
                <section className="container gap-6 px-4 flex-col flex lg:gap-20 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-2 w-full text-light">
                        <span className="text-xs flex items-center font-semibold w-fit border text-dark-grey/75 bg-secondary border-secondary px-5 p-1.5 rounded-full mb-2">
                            <p>Our Mission</p>
                        </span>
                        <h2 className="md:text-5xl text-4xl font-bold md:max-w-xl">
                            Meat the Team Behind the{" "}
                            <span className="text-primary">Sparkle</span>
                        </h2>

                        <p className="text-lg max-w-lg">
                            Since 2025, Cleanqnet has been transforming homes
                            and lives with exceptional cleaning services
                        </p>
                    </div>
                    <div className="flex relative items-end justify-end">
                        <img
                            src={imageCleaning1}
                            alt="imageCleaning1"
                            className="aspect-square md:mx-0 mx-auto max-w-xs md:max-w-sm bg-light rounded-t-4xl object-cover"
                        />
                    </div>
                </section>
            </header>

            <section className="container">
                <div className="md:grid grid-cols-3 flex flex-wrap justify-center items-center gap-y-4 gap-8 -mt-16 relative z-10">
                    {stats.map((stat) => (
                        <figure className="flex items-center shadow p-2 py-7 gap-1.5 max-w-sm border rounded-2xl border-dark-grey/25 bg-light flex-col w-full">
                            <span className="text-xs border-red-200 bg-red-100 flex items-center font-medium w-fit border text-dark-grey/75 px-5 p-1.5 rounded-full mb-2">
                                <p>{stat.title}</p>
                            </span>
                            <figcaption className="text-3xl text-dark font-medium">
                                {stat.number}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-10 bg-light md:pb-32">
                <div className="container flex flex-col gap-4 px-2.5">
                    <span className="block">
                        <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                            <p>Our Values</p>
                        </span>
                        <h2 className="md:text-5xl text-4xl font-bold max-w-sm">
                            What drives us everyday
                        </h2>
                    </span>

                    <div className="items-center gap-6 mt-2 w-full px-2 grid md:grid-cols-4 grid-cols-1 place-items-center">
                        {ourValues.map((feat) => (
                            <section className="w-full flex border border-dark-grey/10 hover:bg-primary text-light flex-col mx-auto gap-4 bg-white p-4 rounded-xl shadow group duration-300 transition">
                                <div className="flex gap-3">
                                    <span className="bg-[#FFF7EB] aspect-square w-7 h-7 flex items-center justify-center text-[#FF9800] text-xl rounded-full">
                                        <Icon icon={feat.icon} />
                                    </span>
                                    <h4 className="text-lg font-medium text-dark group-hover:text-light">
                                        {feat.name}
                                    </h4>
                                </div>
                                <p className="text-dark-grey/50 group-hover:text-light group-hover:bg-primary bg-light-fade p-3 rounded-lg">
                                    {feat.desc}
                                </p>
                            </section>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="bg-light md:pb-32">
                <div className="container flex flex-col gap-4 px-2.5">
                    <span className="block">
                        <span className="text-xs flex items-center font-medium w-fit border text-dark-grey/75 bg-secondary/50 border-secondary px-5 p-1.5 rounded-full mb-2">
                            <p>Leadership</p>
                        </span>
                        <h2 className="md:text-5xl text-4xl font-bold max-w-sm">
                            Meet Our Team
                        </h2>

                        <p className="text-lg max-w-lg">
                            Everyone at Cleanqnet cares about how neat your home
                            and space turns out to be.
                        </p>
                    </span>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        {ourTeam.map((item) => (
                            <div
                                key={item.title}
                                className="w-full flex flex-col gap-1.5"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-xl mb-2 aspect-[2/1.5] object-cover"
                                />
                                <p>{item.title}</p>
                                <p className="text-xl font-semibold">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaSection />

            <Footer />
        </>
    );
}
