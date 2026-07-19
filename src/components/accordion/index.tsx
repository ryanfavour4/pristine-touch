import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

type FAQItem = {
    q: string;
    a: string;
};

type AccordionProps = {
    items: FAQItem[];
};

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3 w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="border border-grey/10 rounded-lg overflow-hidden bg-light shadow-sm"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full flex justify-between items-center p-4 text-left font-medium"
                        >
                            <span className="font-semibold text-[#262556]">
                                {item.q}
                            </span>
                            <span className="text-xl">
                                {isOpen ? (
                                    <Icon icon={"meteor-icons:chevron-up"} />
                                ) : (
                                    <Icon icon={"meteor-icons:chevron-down"} />
                                )}
                            </span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 pt-0 text-gray-600">
                                        {item.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
