import { menuData } from "./menu-data";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import Logo from "@/components/logo";
import { useRef, useState } from "react";
import NavItem from "./nav-item";

export default function Navbar({ className }: { className?: string }) {
    const navListRef = useRef<HTMLUListElement>(null);
    const [subMenuClicked, setSubMenuClicked] = useState<string>("");
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <nav
                className={`bg-primary/0 text-light container w-[96%] mt-3 md:w-full  h-fit mx-auto flex flex-1 items-center justify-between px-2.5 py-1 md:gap-10 lg:gap-36 backdrop-blur-xs ${className}`}
            >
                {/* Logo */}
                <Link to="/" className="px-4">
                    <Logo variant="default" className="w-11 md:w-16" />
                </Link>

                {/* Nav Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {menuData.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <Link
                        to="/book-now"
                        className="btn-primary text-center w-fit"
                    >
                        Book now
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setNavOpen((p) => !p)}
                    className="btn mr-px w-fit rounded-md p-1 text-light md:hidden ml-auto"
                >
                    <Icon icon="cuida:menu-outline" width="28" height="28" />
                </button>
            </nav>
            {/* _____________ Slide navbar for mobile _____________ */}
            <div
                className={`fixed inset-0 z-20 bg-primary/25 text-dark backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${
                    navOpen
                        ? "visible clip-path-slide-top-down"
                        : "invisible delay-200 clip-path-close"
                }`}
            >
                <div
                    className={`${
                        navOpen
                            ? "delay-200 clip-path-slide-top-down"
                            : "clip-path-close"
                    } h-full w-full bg-light px-2 py-3 duration-500`}
                >
                    <div className="flex items-center justify-between px-2 pt-2">
                        <Link to="/" className="px-4">
                            <Logo variant="alt-icon" className="w-16" />
                        </Link>

                        <button
                            onClick={() => setNavOpen((p) => !p)}
                            className="btn ml-auto block w-fit rounded-md p-0.5 text-primary"
                        >
                            <Icon
                                icon={"iconamoon:close-light"}
                                className="text-4xl"
                            />
                        </button>
                    </div>

                    <div className="mt-10 h-[calc(100vh-100px)] overflow-scroll py-6 pb-20">
                        <ul ref={navListRef} className="h-fit space-y-3">
                            {menuData.map((menu, index) => (
                                <li
                                    key={index}
                                    className={`overflow-hidden border-b`}
                                >
                                    <Link
                                        onClick={() =>
                                            setSubMenuClicked((prev) =>
                                                prev === menu.subPath
                                                    ? ""
                                                    : menu.subPath || "",
                                            )
                                        }
                                        className="flex w-full items-center justify-between px-3 py-2 font-semibold"
                                        to={menu.path || ""}
                                    >
                                        <p className="hover:text-primary">
                                            {menu.name}
                                        </p>
                                        {menu.subMenu && (
                                            <Icon
                                                icon={"mdi-light:chevron-down"}
                                                className="text-xl"
                                            />
                                        )}
                                    </Link>

                                    {menu.subMenu && (
                                        <ul
                                            className={`mb-0 h-0 w-full overflow-hidden bg-white px-3 transition-all ${
                                                subMenuClicked ==
                                                    menu.subPath &&
                                                "mb-2 h-auto"
                                            }`}
                                        >
                                            {menu.subMenu.map(
                                                (subMenu, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            className={`hover:bg-secondary/50 flex w-full items-center justify-between border-2 border-transparent px-3 py-2 hover:border-l-primary hover:font-semibold`}
                                                            to={
                                                                subMenu.path
                                                                    ? subMenu.path
                                                                    : menu.subPath +
                                                                      subMenu.path
                                                            }
                                                        >
                                                            <p>
                                                                {subMenu.name}
                                                            </p>
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

