import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";

export const LoadingScreen = () => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-light/50 backdrop-blur-sm">
            <div className="my-auto flex h-full max-h-96 w-full flex-col items-center justify-center gap-8 p-6">
                <Icon
                    icon={"eos-icons:three-dots-loading"}
                    className="size-24 text-primary"
                />
            </div>
        </div>,
        document.getElementById("portal") as HTMLElement
    );
};
