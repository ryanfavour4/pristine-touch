import Logo from "@/components/logo";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <footer className="border-t-2 bg-[#034053] text-light border-grey/25 py-10">
                <div className="px-2 container grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="flex flex-col gap-6 mb-4">
                        <Link to={"/"}>
                            <Logo className="w-16" />
                        </Link>
                        <p>
                            Professional cleaning services that make your home
                            sparkle. Trusted by hundreds of families.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 font-medium">
                        <p className="text-lg font-bold mb-4">Quick Links</p>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/book-now">Book Now</Link>
                    </div>

                    <div className="flex flex-col gap-2 font-medium">
                        <p className="text-lg font-bold mb-4">Services</p>
                        <Link to="/services">Room Cleaning</Link>
                        <Link to="/services">Bathroom Cleaning</Link>
                        <Link to="/services">Full House Cleaning</Link>
                    </div>

                    <div className="flex flex-col gap-2 font-medium">
                        <p className="text-lg font-bold mb-4">Contact Us</p>
                        <a
                            href="tel:+2349068954673"
                            className="flex items-center gap-1 underline"
                        >
                            <Icon
                                icon={"ic:outline-call"}
                                className="text-xl"
                            />
                            <p>+234 906 895 4673</p>
                        </a>
                        <a
                            href="https://www.instagram.com/cleanqnect_za"
                            className="flex items-center gap-1 underline"
                        >
                            <Icon
                                icon={"line-md:instagram"}
                                className="text-xl"
                            />
                            <p>Pristine Touch</p>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-1 underline"
                        >
                            <Icon
                                icon={"mdi:address-marker-outline"}
                                className="text-xl"
                            />
                            <p>Lagos, Nigeria</p>
                        </a>
                    </div>
                </div>
                <div className="container pt-8">
                    <hr />
                    <p className="text-center mt-8 block">
                        {new Date().getFullYear()} Pristine Touch - All Rights
                        Received
                    </p>
                </div>
            </footer>
        </>
    );
}

