import logo from "/public/images/logo.png";
import logoAltIcon from "/public/images/alt-logo.png";
import logoIcon from "/public/images/logo.png";

type prop = {
    className?: string;
    variant?: "default" | "alt-icon" | "icon";
};

export default function Logo({ className, variant = "default" }: prop) {
    let logoSrc = logo;

    if (variant === "alt-icon") {
        logoSrc = logoAltIcon;
    } else if (variant === "icon") {
        logoSrc = logoIcon;
    }

    return (
        <>
            <img
                alt="logo"
                src={logoSrc}
                className={`w-10 object-contain ${className}`}
            />
        </>
    );
}
