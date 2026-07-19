import { Icon } from "@iconify/react";
import { Link } from "react-router";

export function AppleStoreButton() {
    return (
        <>
            <button className="btn w-fit items-center gap-3 rounded-2xl bg-black px-10 py-3 text-light ring-2 ring-offset-1 ring-black border-light border">
                <Icon icon={"logos:apple"} className="fill-light text-3xl" />
                <div className="flex flex-col items-start">
                    <small className="text-xs leading-none">
                        Download on the
                    </small>
                    <p className="font-semibold leading-none">Apple Store</p>
                </div>
            </button>
        </>
    );
}

export function GooglePlayStoreButton() {
    return (
        <>
            <button className="btn w-fit items-center gap-3 rounded-2xl bg-black px-10 py-3 text-light ring-2 ring-offset-1 ring-black border-light border">
                <Icon icon={"logos:google-play-icon"} className="text-3xl" />
                <div className="flex flex-col items-start">
                    <small className="text-xs leading-none">Get it on</small>
                    <p className="font-semibold leading-none">Google Play</p>
                </div>
            </button>
        </>
    );
}

export function CtaSection() {
    return (
        <section className="bg-light py-16 md:pb-32 px-2">
            <div className="container max-w-5xl rounded-4xl flex flex-col gap-4 items-center px-2.5 py-20 bg-primary text-light bg-cta-section">
                <h4 className="max-w-2xl mx-auto md:text-5xl text-4xl font-semibold text-center">
                    Ready for Sparkling Clean Home?
                </h4>

                <p className="text-lg text-center max-w-lg">
                    Book your cleaning service today and experience the
                    difference. First-time customer satisfaction is guaranted
                </p>

                <Link
                    to="/contact"
                    className="btn-ghost bg-light w-fit px-8 flex items-center gap-2"
                >
                    <p>Book Now</p>{" "}
                </Link>
            </div>
        </section>
    );
}

export function Cta2Section() {
    return (
        <section className="bg-light py-16 md:pb-32 px-2">
            <div className="container max-w-5xl rounded-4xl flex flex-col gap-4 items-center px-2.5 py-20 bg-primary text-light bg-cta-section">
                <h4 className="max-w-3xl mx-auto md:text-7xl text-4xl font-semibold text-center">
                    Ready to get your space neat?
                </h4>

                <p className="text-lg text-center max-w-lg">
                    Get your space done by ordering our cleaning service at
                    affordable price.
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                    <Link
                        to="/book-now"
                        className="btn-ghost bg-light w-fit px-8 flex items-center gap-2"
                    >
                        <p>Book Now</p>{" "}
                    </Link>

                    <Link
                        to="/book-now"
                        className="btn-ghost bg-light w-fit px-8 flex items-center gap-2"
                    >
                        <p>Contact</p>{" "}
                    </Link>
                </div>
            </div>
        </section>
    );
}

