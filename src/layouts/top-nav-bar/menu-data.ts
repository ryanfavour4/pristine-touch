export type T_menu = {
    name: string;
    path?: string;
    external?: boolean;
    subPath?: string; // ✅ ADD THIS
    subMenu?: {
        name: string;
        path: string;
    }[];
    icon?: string;
};

export const menuData: T_menu[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About us",
        path: "/about-us",
    },
    {
        name: "Service",
        path: "/service",
    },
    {
        name: "Book now",
        path: "/book-now",
    },
    // {
    //     name: "Media",
    //     path: "/media",
    // },
    // {
    //   name: "Rooms", // ✅ ADD THIS
    //   subPath: "rooms",
    //   subMenu: [
    //     { name: "All Rooms", path: "/all-rooms" },
    //   ],
    // },
];
