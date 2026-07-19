import { Link } from "react-router";
import image404Picture from "/images/alt-logo.png";

export default function ErrorPage() {
    return (
        <div>
            <div className="flex bg-white h-svh">
                {/* <!-- Sidebar Image --> */}
                <div className="hidden lg:block lg:w-1/2 relative">
                    <img
                        src={image404Picture}
                        alt="image404Picture"
                        className="h-full w-3/4 mx-auto object-contain animate-pulse"
                    />
                    <div className="absolute inset-0"></div>
                </div>

                {/* <!-- Main content --> */}
                <main className="flex flex-1 items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center max-w-md">
                        <p className="text-base font-semibold text-primary">
                            404
                        </p>
                        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-dark sm:text-7xl">
                            Page not found
                        </h1>
                        <p className="mt-6 text-base font-medium text-pretty text-dark/75">
                            Sorry, we couldn’t find the page you’re looking for.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/" className="btn-primary w-fit px-10">
                                Go back home
                            </Link>
                            <Link
                                to="/contact"
                                className="text-sm font-semibold text-primary"
                            >
                                Contact support{" "}
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

